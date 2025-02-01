---
id: Mongoose Guides
tags:
  - javascript
  - mongoose
---

# Mongoose Guides

[Documentation](https://mongoosejs.com/docs/index.html)

## Schemas

### Defining your Model

- Schema map json objects to a MongoDB collection that defines and shapes the documents within the collection:
```js
import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});
```
- If a property only needs a type, it can be shorthanded like above.
- Keys can also be included in nested objects like `meta`.
  - Mongoose only creates paths for nested objects, like `meta.votes` and `meta.faves`.
  - In this case, `meta` can not have its own validation.
  - If validation is needed, a path can be made up the tree.
- Permitted Schema Types:
  - String
  - Number
  - Date
  - Buffer
  - Boolean
  - Mixed
  - ObjectId
  - Array
  - Decimal128
  - Map
  - UUID
  - Double
  - Int32

### Creating a Model
- Schemas can be used to create Models.
- To create a model:
```js
const Blog = mongoose.model('Blog', blogSchema);
// ready to go!
```

### Ids
- By default, Mongoose adds an _id property to schemas.
```js
const schema = new Schema();

schema.path('_id'); // ObjectId { ... }
```
- When a document is created with an object id, it has the type `ObjectId`:
```js
const Model = mongoose.model('Test', schema);

const doc = new Model();
doc._id instanceof mongoose.Types.ObjectId; // true
```
- You can overwrite the default id with your own _id. 
  - Caution: MongoDB will not save an object without a top-level ID.
```js
const schema = new Schema({
  _id: Number // <-- overwrite Mongoose's default `_id`
});
const Model = mongoose.model('Test', schema);

const doc = new Model();
await doc.save(); // Throws "document must have an _id before saving"

doc._id = 1;
await doc.save(); // works
```
- Mongoose also adds an `_id` property to sub documents. 
- Sub documents can have their `_id`s disabled and will still save properly.
```js
const nestedSchema = new Schema(
  { name: String },
  { _id: false } // <-- disable `_id`
);
const schema = new Schema({
  subdoc: nestedSchema,
  docArray: [nestedSchema]
});
const Test = mongoose.model('Test', schema);

// Neither `subdoc` nor `docArray.0` will have an `_id`
await Test.create({
  subdoc: { name: 'test 1' },
  docArray: [{ name: 'test 2' }]
});
```
- The `_id` can be disabled using the following:
```js
const nestedSchema = new Schema({
  _id: false, // <-- disable _id
  name: String
});
```

### Instance Methods
- Instances of models are called documents. 
- Documents have numerous built in methods, you can also define your own!
```js
// define a schema
const animalSchema = new Schema({ name: String, type: String },
  {
  // Assign a function to the "methods" object of our animalSchema through schema options.
  // By following this approach, there is no need to create a separate TS type to define the type of the instance functions.
    methods: {
      findSimilarTypes(cb) {
        return mongoose.model('Animal').find({ type: this.type }, cb);
      }
    }
  });

// Or, assign a function to the "methods" object of our animalSchema
animalSchema.methods.findSimilarTypes = function(cb) {
  return mongoose.model('Animal').find({ type: this.type }, cb);
};
```
- This allows for all instances of `animal` to have the `findSimilarTypes` function.
```js
const Animal = mongoose.model('Animal', animalSchema);
const dog = new Animal({ type: 'dog' });

dog.findSimilarTypes((err, dogs) => {
  console.log(dogs); // woof
});
```
- Be cautious when overriding built in Mongoose methods. It can have unforeseen consequences!

### Statics
- Static functions can also be added to the model.
- There are three different ways to add a Static function:
  - Add a function property to the second argument of the schema-constructor (`status`)
  - Add a function property to `schema.statics`
  - Call the `Schema#static()`
```js
// define a schema
const animalSchema = new Schema({ name: String, type: String },
  {
  // Assign a function to the "statics" object of our animalSchema through schema options.
  // By following this approach, there is no need to create a separate TS type to define the type of the statics functions.
    statics: {
      findByName(name) {
        return this.find({ name: new RegExp(name, 'i') });
      }
    }
  });

// Or, Assign a function to the "statics" object of our animalSchema
animalSchema.statics.findByName = function(name) {
  return this.find({ name: new RegExp(name, 'i') });
};
// Or, equivalently, you can call `animalSchema.static()`.
animalSchema.static('findByBreed', function(breed) { return this.find({ breed }); });

const Animal = mongoose.model('Animal', animalSchema);
let animals = await Animal.findByName('fido');
animals = animals.concat(await Animal.findByBreed('Poodle'));
```

### Query Helpers
- Query helper functions can also be added:
```js

// define a schema
const animalSchema = new Schema({ name: String, type: String },
  {
  // Assign a function to the "query" object of our animalSchema through schema options.
  // By following this approach, there is no need to create a separate TS type to define the type of the query functions.
    query: {
      byName(name) {
        return this.where({ name: new RegExp(name, 'i') });
      }
    }
  });

// Or, Assign a function to the "query" object of our animalSchema
animalSchema.query.byName = function(name) {
  return this.where({ name: new RegExp(name, 'i') });
};

const Animal = mongoose.model('Animal', animalSchema);

Animal.find().byName('fido').exec((err, animals) => {
  console.log(animals);
});

Animal.findOne().byName('fido').exec((err, animal) => {
  console.log(animal);
});
```

### Indexes
- MongoDB supports secondarily indexes.
- They can be defined at the path level or the schema level:
```js
const animalSchema = new Schema({
  name: String,
  type: String,
  tags: { type: [String], index: true } // path level
});

animalSchema.index({ name: 1, type: -1 }); // schema level
```
- When the application starts, Mongoose will automatically call `createIndex` for each defined index in the schema. 
- It is recommended to turn this feature off in production since it can cause a significant performance decrease.
  - This can be disabled in two different ways:
    - At the schema level
    - At the global level
```js
mongoose.connect('mongodb://user:pass@127.0.0.1:port/database', { autoIndex: false });
// or
mongoose.createConnection('mongodb://user:pass@127.0.0.1:port/database', { autoIndex: false });
// or
mongoose.set('autoIndex', false);
// or
animalSchema.set('autoIndex', false);
// or
new Schema({ /* ... */ }, { autoIndex: false });
```
- An `index` event will be emitted on the model when indexes are done or an error occurs.
```js
// Will cause an error because mongodb has an _id index by default that
// is not sparse
animalSchema.index({ _id: 1 }, { sparse: true });
const Animal = mongoose.model('Animal', animalSchema);

Animal.on('index', error => {
  // "_id index cannot be sparse"
  console.log(error.message);
});
```

### Virtuals
- Virtuals are document properties that can be set but do not get persisted to MongoDB.
- The getters are useful for formatting and combining fields while the setters are useful for de-composing a single value into multiple values for storage.
```js
// define a schema
const personSchema = new Schema({
  name: {
    first: String,
    last: String
  }
});

// compile our model
const Person = mongoose.model('Person', personSchema);

// create a document
const axl = new Person({
  name: { first: 'Axl', last: 'Rose' }
});
```
- Here is a good example for wanting to get the first and last name together:
```js
// That can be done either by adding it to schema options:
const personSchema = new Schema({
  name: {
    first: String,
    last: String
  }
}, {
  virtuals: {
    fullName: {
      get() {
        return this.name.first + ' ' + this.name.last;
      }
    }
  }
});

// Or by using the virtual method as following:
personSchema.virtual('fullName').get(function() {
  return this.name.first + ' ' + this.name.last;
});
```
- Then you can just do: `console.log(axl.fullName); // Axl Rose`
- When using `toJson` or `toObject`, Mongoose does not include virtuals by default. Pass `{ virtuals: true }` to include them.
```js
// Convert `doc` to a POJO, with virtuals attached
doc.toObject({ virtuals: true });

// Equivalent:
doc.toJSON({ virtuals: true });
```
- The same caveat applies to `JSON.stringify()`.
```js
// Explicitly add virtuals to `JSON.stringify()` output
JSON.stringify(doc.toObject({ virtuals: true }));

// Or, to automatically attach virtuals to `JSON.stringify()` output:
const personSchema = new Schema({
  name: {
    first: String,
    last: String
  }
}, {
  toJSON: { virtuals: true } // <-- include virtuals in `JSON.stringify()`
});
```
- Custom setters work as well:
```js
// Again that can be done either by adding it to schema options:
const personSchema = new Schema({
  name: {
    first: String,
    last: String
  }
}, {
  virtuals: {
    fullName: {
      get() {
        return this.name.first + ' ' + this.name.last;
      },
      set(v) {
        this.name.first = v.substr(0, v.indexOf(' '));
        this.name.last = v.substr(v.indexOf(' ') + 1);
      }
    }
  }
});

// Or by using the virtual method as following:
personSchema.virtual('fullName').
  get(function() {
    return this.name.first + ' ' + this.name.last;
  }).
  set(function(v) {
    this.name.first = v.substr(0, v.indexOf(' '));
    this.name.last = v.substr(v.indexOf(' ') + 1);
  });

axl.fullName = 'William Rose'; // Now `axl.name.first` is "William"
```

### Aliases
- Aliases are a particular type of virtual where the getter and setter work together.
```js
const personSchema = new Schema({
  n: {
    type: String,
    // Now accessing `name` will get you the value of `n`, and setting `name` will set the value of `n`
    alias: 'name'
  }
});

// Setting `name` will propagate to `n`
const person = new Person({ name: 'Val' });
console.log(person); // { n: 'Val' }
console.log(person.toObject({ virtuals: true })); // { n: 'Val', name: 'Val' }
console.log(person.name); // "Val"

person.name = 'Not Val';
console.log(person); // { n: 'Not Val' }
```
- This can also be done on nested schema:
```js
const childSchema = new Schema({
  n: {
    type: String,
    alias: 'name'
  }
}, { _id: false });

const parentSchema = new Schema({
  // If in a child schema, alias doesn't need to include the full nested path
  c: childSchema,
  name: {
    f: {
      type: String,
      // Alias needs to include the full nested path if declared inline
      alias: 'name.first'
    }
  }
});
```
