# Promises

Let's start with a quick video that goes over everything in a very succinct way:

{% hyf-youtube src="https://www.youtube.com/watch?v=DHvZLI7Db8E" %}

He gives a lot of information in a short amount of time, so let's go through some of the concepts in a more detailed way:

## Callback Hell

By now you should've had some practice using callbacks. To reiterate, we use callbacks **as a way to create asynchronicity** in our application: we want to enable our application to do multiple things simultaneously.

But what if you want to have callbacks within callbacks... within callbacks? This will lead to what is known as **callback hell**.

- [Callback Hell](http://callbackhell.com/)

This is where `Promises` come in. The idea of the `Promise` is a product of the evolution within the JavaScript language. A bunch of JavaScript developers wanted to figure out how to solve the problem of callback hell and this is what they came up with. Here's a basic example:

```js
const promise = new Promise(function(resolve, reject) {
  if (true) {
    resolve('It has succeeded!');
  } else {
    reject('It has failed...');
  }
});
```

## Promise States

A promise can be in 1 of 3 states:

1. Pending: The asynchronous code is being executed, with no result yet
2. Fulfilled (resolved): The asynchronous code has successfully been executed without problems
3. Rejected: The asynchronous code has failed because of some error

When a Promises is executed it will first execute the asynchronous code inside. In this process it will go into the `pending` state. After, depending on if it succeeded or not, it will be `resolved` or `rejected`.

## Chaining

What if you need to perform several asynchronous operations, that depend on the result of the one that came before it? For that we can use the `.then()` method: a special function, given to us by the Promise object, that allows us to directly use the return value of the asynchronous operation that happened before. Here's an example:

```js
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000); // We wait 1 second and then resolve with value 1
})
  .then(function(result) {
    console.log(result); // Result: 1
    return result * 2;
  })
  .then(function(result) {
    alert(result); // Result: 2
    return result * 2;
  })
  .catch(error => {
    console.log(error);
  });
```

By chaining the Promise we can gain greater control over the results of our asynchronous operations!

## Benefits

The concept of a Promise, in execution, doesn't add anything new. It does exactly what callbacks aim to do, which is enabling `asynchronous actions`: for example, clicking a button to load in an image, while still being able to navigate the webpage.

So what are the benefits of using a Promise over a callback? Here's a few:

1. It makes writing asynchronous JavaScript code more readable for you, the developer. In effect, you could call Promises the updated version of callbacks. Callbacks version 2.0.
2. Better error handling, because of the `catch` block attached at the end. When something goes wrong within the Promise structure, it will throw an error. This error will then be caught and handled within the `catch` block.

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

* [JavaScript Promises for Dummies](https://scotch.io/tutorials/javascript-promises-for-dummies)
* [Let's learn ES6 - Promises](https://www.youtube.com/watch?v=vQ3MoXnKfuQ)
* [JavaScript Promise in 100 Seconds](https://www.youtube.com/watch?v=RvYYCGs45L4)
* [A Simple Guide to ES6 Promises](https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a)
* Visualize Promises: [Promisees](https://bevacqua.github.io/promisees/), [PromiseTree](https://shlomiassaf.github.io/PromiseTree/playground/#/playground), [dev.to/lydiahallie](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)
* [Awesome Promises](https://github.com/wbinnssmith/awesome-promises)
* [Promise Cookbook](https://github.com/mattdesl/promise-cookbook)
* [Coding Train](https://www.youtube.com/watch?v=QO4NXhWo_NM&list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx)
* [javascript.info/async](https://javascript.info/async)
* [Promises in 10 minutes](https://www.youtube.com/watch?v=DHvZLI7Db8E)
* [Async JS Crash Course](https://www.youtube.com/watch?v=PoRJizFvM7s)
* [Promise Basics](https://javascript.info/promise-basics)
* Examples to Study: [egghead-javascript-promises](https://github.com/mariusschulz/egghead-javascript-promises)
* [Traversy: Asynchronous Programming](https://www.youtube.com/watch?v=PoRJizFvM7s)
* [__promises__: FunFunFunction](https://www.youtube.com/watch?v=2d7s3spWAzo&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
* [__async/await__: FunFunFunction](https://www.youtube.com/watch?v=568g8hxJJp4)
