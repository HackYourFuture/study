# ES6

* [Traversy Crash Course](https://www.youtube.com/playlist?list=PLillGF-RfqbZ7s3t6ZInY3NjEOOX7hsBv)

## Arrow Functions
One of a programmer's favorite things to do is to write clean and concise code. `Arrow Functions` are a new way to write functions, given to us by the ECMAScript 6 (The software standard JavaScript is based upon) update of JavaScript.

It's a little different from regular functions, take a look:

```js
// ES5 Function
function addNum(num1, num2) {
  return num1 + num2;
}

// Arrow Function (stored in variable)
const addNum = (num1, num2) => {
  return num1 + num2;
};
```

If you've done some research, you may come to the following conclusions:

1. First of all, the Arrow Function is anonymous by design. If we want to refer to it, we should store it into a variable.
2. Secondly, the way Arrow Functions can be written can differ (while still working the same way). Sometimes you don't need the `()` if there's a single parameter. Sometimes you can `return` a value without use for the `return` keyword.

### Extra reading on arrow functions:
- [JavaScript ES6 Arrow Functions](https://www.youtube.com/watch?v=h33Srr5J9nY)
- [Let's learn ES6 - Arrow Functions](https://www.youtube.com/watch?v=oTRujqZYhrU)
- [When (and why) you should use ES6 arrow functions — and when you shouldn’t](https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/)
- `this`: [tyler mcginnis](https://tylermcginnis.com/arrow-functions/)
- [youtube search](https://www.youtube.com/results?search_query=arrow+function+binding+this)
- [dario garcia moya](https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc)
