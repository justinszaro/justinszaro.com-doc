---
id: New Javascript ES6 Features
tags:
  - javascript
  - es6
---

# ES6 - New Javascript Features

#### Compare Scopes of Var and Let Keywords
- `var` is a keyword that is declared globally. Its scope is local if it is declared within a function. 
- `let` is a keyword that limits its scope to a block, statement, or expression.
  - For this reason, `let` is a much better choice for variables that are constrained to for and while loops. This way the variable can be reused in the future. 

#### Mutating arrays declared with const
- `const` is used to define variables that will not be changed again. 
  - Exception: objects (including arrays and functions) assigned to a variable using const are stull mutable. 
  - The `const` declaration only prevents the reassignment of the variable.
  - To prevent objects from mutating, you can use the `Object.freeze()` method.
```js
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
Object.freeze(s);
editInPlace(); // Will fail and throw an error
```

#### Using Arrow Functions to Write Concise Anonymous Functions
- If a function is only being used as an arguement to another function, it is often easier to leave these unamed and inline:
```js
const myFunc = function() {
    const myVar = "value";
    return myVar;
}
```
- Arrow functions can be used instead of making a name for the variable:
```js
const myFunc = () => {
    const myVar = "value";
    return myVar;
}
```
- Smaller functions with only a return value can omit the curly braces and the return statement entirely:
`const myFunc = () => "value"`
- Arrow functions also allow for parameters to pass through them, making them very useful for broader functions. 
```js
const doubler = (item) => item * 2;
doubler(4); // Would return 8
```
- Any functions with a single parameter can omit the parenthesis:
`const doubler = item => item * 2;`
 - Multiple values are also allowed:
```js
const multiplier = (item, multi) => item * multi;
multiplier(2, 4); // Would return 8
```
- Default parameters can also be set for arrow functions
```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

#### Using the rest parameter for functions
- With the new rest parameter (`...args`), you can pass any number of variables into a function
```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguements.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguements
```
- This could be good for mathematical functions, but may not be super clear and readible for a team of developers. 

#### Use the Spread Operator to Evaluate Arrays In-Place
- The spread operator allows for arrays to be expanded and in place where multiple parameters and elements are expected.
```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
console.log(maximus); // Would have a value of 89
```
- The `null` in the previous example is needed because the `apply()` function expects multiple different parameters. This syntax can be avoided using the spread operator:
```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(...arr);
console.log(maximus); // Would have a value of 89
```
- The spread operator only works in place and connot be used as a value of a new variable. 

#### Use Destructuring Assignment to Extract Values from Objects
- Destructuring assignment allows for you to assign multiple values in an object:
```js
const user = { name: 'John Doe', age: 34 };

//const name = user.name;
//const age = user.age;
const {name, age} = user
```
- You can extract fewer values if you wish. 
- You can assign the new variables a new name if you wish using the same object-like syntax:
```js
const user = { name: 'John Doe', age: 34 };
const { name: userName, age: userAge } = user;
```
- Objects within objects can also be deconstructed in the same way:
```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

const { johnDoe: { age: userAge, email: userEmail }} = user;
```

#### Use Destructuring Assignment to Assign Variables from Arrays
- You can also use deconstruction assignment to deconstruct arrays:
```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // a=1 and b=2

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // a=1 and b=2 c=5
```
- You can also deconstruct using the rest element.
```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```

#### Use Destructuring Assignment to Pass an Object as a Function's Parameters
- You can also deconstruct an object in a functions parameters. 
```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
}
// Can become
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

#### Using Template Literals
- Template literals can now be used within javascript to include variables in strings.
```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); //Hello, my name is Zodiac Hasbro. I am 56 years old.
```

#### Writing concise object literal declarations using object property shorthand
- You can also easily define object literals using Object Property Shorthands:
```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
// OR
const getMousePosition = (x, y) => ({ x, y });
```

#### Writing Consise Declarative Functions with ES6
- When defining functions within objects, you had to include the function keyword. ES6 allows you to skip it all together.
```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
console.log(person.sayHello()); // Hello! My name is Taylor.
```

#### Use class Syntax to Define a Constructor Function
- ES5 required an objects creation to be handled by a constructor function and the `new` keyword.
- In ES6, a `class` declaration can also have a constructor method that is invoked with the `new` keyword. If the constructor methid is not defined, it is implicitly defined with no arguements. 
```js
// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
```

#### Getters and Setters to Control Access to an Object
- When using private variables (prefixed with the `_`), getters and setters must be used accessing/setting the variable. This is very similar to Java OOP
```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
```

#### Using export to share a code block
- You can export code blocks to be used by other JavaScript files.
```js
export const add = (x, y) => {
  return x + y;
}
// OR
const add = (x, y) => {
  return x + y;
}

export { add };
```
- You can also export multiple functions at once:
  - EX: `export {add, subtract};`

#### Reuse Javascript using Import
- Code can also be imported from other files using the `import` keyword. Multiple functions can be imported from the same file.
  - EX: ` import { add, subtract } from './math_functions.js';`
- All of the contents can also be imported using the `*` wildcard.
  - EX: `import * as myMathModule from './math_functions'`  
  - Any functions or variables that are neccessary can be accessed like a JavaScript Object.

#### Javascript Promises
- A promise states that you will do something, usually asyncronously.
- When the task is finished, you either completed or failed to complete the promise.
- `Promise` is a constructor function, so you need to use the `new` keyword to create one. 
- It takes two parameters: `resolve` and `reject`.
```js
const myPromise = new Promise((resolve, reject) => {

});
```
- Promises have three states, pending, fulfilled, and rejected. Promises will forever remain in the pending state unless you give a way to complete the promise.
  - The `resolve` keyword is used when you want your promise to succeed.
  - The `reject` keyword is when you want your promise to fail.
```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```
- Promises are increadibly useful when you have a process that takes an unknown amount of time, such as an API call or Database Query. 
- Once it completes you normally want to do something with the results. This can be done using the `then` method. The `then` method is run as soon as the resolve method is triggered.
```js
myPromise.then(result => {
  
});
```
- Rejections can be handled using the `catch` function (similar to a try catch block.) This is triggered as soon as the promise is rejected.
```js
myPromise.catch(error => {
  
});
```