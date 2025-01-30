# Mongoose

- An elegant mongodb object modeling for node.js.
- First, ensure MongoDB and Node.js are installed.

## MongoDB (As said by ChatGpt)

- MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents
- Instead of using tables and rows as in traditional relational databases, MongoDB uses collections and documents
- Key features:
  - Document-oriented: Data is stored in flexible JSON-like documents
  - Scalable: Supports horizontal scaling through sharding
  - High Performance: Provides high-speed access to data with indexing
  - Free and open-source
  - Supports rich queries, aggregation, and full-text search

## Quick Start

- Install mongoose from the command line:

```sh
npm install mongoose --save
```

- To start mongoose and connect to MongoDB

```js
// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
```

- Within Mongoose, everything is derived from schema:

```js
const kittySchema = new mongoose.Schema({
  name: String,
});
```

- Next, the schema need to be compiled into a Model.

```js
const Kitten = mongoose.model("Kitten", kittySchema);
```

- A model is any class that documents are constructed in.
- To create a document:

```js
const silence = new Kitten({ name: "Silence" });
console.log(silence.name); // 'Silence'
```

- Methods can be added to the methods property of a schema to be exposed on each document instance:

```js
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};

const Kitten = mongoose.model("Kitten", kittySchema);
```

```js
const fluffy = new Kitten({ name: "fluffy" });
fluffy.speak(); // "Meow name is fluffy"
```

- Documents can be saved to the database using the `save` method.

```js
await fluffy.save();
fluffy.speak();
```

- All the documents of that model can be found through the model:

```js
const kittens = await Kitten.find();
console.log(kittens);
```

- To query models, Mongoose supports MongoDBs [querying](https://mongoosejs.com/docs/queries.html) syntax:

```js
await Kitten.find({ name: /^fluff/ });
```
