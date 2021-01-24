# Higher Order Functions
Let's start with a simple, practical definition: a higher order function is any function that can take another function as an argument or returns a function.

```js
// Example 1
function higherOrderFunction(anotherFunction) {
  anotherFunction();
  return;
}

// Example 2
function anotherHigherOrderFunction() {
  return function () {
    return;
  };
}
```

Why do we need them? A higher order function integrates multiple functions, which each have a singular operational purpose. This will allow us to reuse code much more than if we had to write everything out.

> Higher order functions are a core concept within a programming paradigm called "functional programming". It's not relevant at all for you to know or care about this, but it's important to be exposed to it.

### Array methods

There are different ways of dealing with arrays. The most common way is by using a loop and then writing custom logic inside it in order to manipulate the values. This solution works, but it comes at several disadvantages.

1. The first disadvantage is that using loops requires us to write custom logic for each use case. This can lead to repeated code, which we always want to [avoid](https://www.youtube.com/watch?v=IGH4-ZhfVDk)
2. The second disadvantage is that a loop isn't descriptive about what it intends to do. If another developer reads that code it wouldn't be obvious what it would do, without spending time on it to decipher it

There are certain functions, `array functions`, that aim to solve these two problems simultaneously. Array functions are higher order functions, because they take a function as an argument.

Let's take an example: the `map()` function. It takes a function as an argument, and executes that unto each index position of the array, returning at the end a new array with all the "mapped" values.

Take a look at the following code snippet to see it in action:

```js
const numbers = [2, 4, 6, 8, 10];

function addTwo(number) {
  return number + 2;
}

const numbersPlusTwo = numbers.map(addTwo);

console.log(numbersPlusTwo);
```

Copy and paste this snippet in the browser console to see how it works. As you can see the function `addTwo` added 2 to each value in the `numbers` array, because that's what the `map()` function does: it "maps" a function unto each array index.

We could've done the same thing with a regular loop, but that would've been (1) much less readable, and (2) much more code:

```js
const numbers = [2, 4, 6, 8, 10];
const numbersPlusTwo = [];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  const addedTwo = number + 2;

  numbersPlusTwo.push(addedTwo);
}

console.log(numbersPlusTwo);
```

Can you see why the array function is the better way to go?

When it comes to higher order functions, the es6 function syntax is very useful, have a look at them in the es6 section [here](./es6.md)

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [JavaScript Higher Order Functions & Arrays](https://www.youtube.com/watch?v=rRgD1yVwIvE)
- [8 Must Know JavaScript Array Methods](https://www.youtube.com/watch?v=R8rmfD9Y5-c)
