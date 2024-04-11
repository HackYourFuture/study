# Modern JavaScript

You are undoubtedly different than when you were a baby. Back then you couldn't do much except crying. That's pretty much it. But as the years pass you increasingly could do more and more: walking, socializing or playing an instrument.

Likewise, so has JavaScript evolved. Throughout learning programming you probably have, unknowingly, used syntax from different JavaScript versions. For example, if you've ever declared a function like this:

```js
function aFunction() {
  // Some magnificent code ...
}
```

You did so using an old version of JavaScript.

But if you've ever used `Arrow Functions` (which you'll learn more about in the next section), you did so using a newer version of JavaScript.

Each feature (and its updates) of a language is made to solve a specific problem. It's important to know the context and purpose of each to know how to use it.

Always be mindful of which **version** of any technology, library or language you are using. This is important, because this means that not everything will work the same way, even if it's the same tool you've been using! In your coding journey you'll come across many code bases that will include different versions of technologies.

So let's talk about all the things Modern JavaScript has given us:

1. Let/const
2. Template strings
3. Arrow Functions
4. Spread operator
5. Default parameter
6. Destructuring

## Let / const

One of the first things that were introduced in modern JS were the `let` and `const` keywords to replace `var`. You can read all about them in our [variables explanation](./variables.md).

## Template strings

Template strings are easiest to explain with an example. Have a look at the following:

```js
const name = 'Ayman';

// ES5 string concatenation
console.log('Hello ' + name + ', welcome aboard');

// ES6 template strings
console.log(`Hello ${name}, welcome aboard`);
```

Note the use of the backtick (\`) instead of the normal quote, that tells the compiler that we want to use a template string. What is even cooler is that inside the `${}` syntax you can even add some expressions. If we combine it with the ternary operator for example:

```js
const name = 'Rana';
const grade = 8;

console.log(
  `Hi ${name}, you have ${grade >= 6 ? 'passed' : 'failed'} your test`
);
```

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

### Extra reading on arrow functions

- [JavaScript ES6 Arrow Functions](https://www.youtube.com/watch?v=h33Srr5J9nY)
- [Let's learn ES6 - Arrow Functions](https://www.youtube.com/watch?v=oTRujqZYhrU)
- [When (and why) you should use ES6 arrow functions — and when you shouldn’t](https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/)
- `this`: [tyler mcginnis](https://tylermcginnis.com/arrow-functions/)
- [youtube search](https://www.youtube.com/results?search_query=arrow+function+binding+this)
- [dario garcia moya](https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc)

## Spread operator

The spread operator again allows us to write cleaner code as well as introduces some new options. The basic idea is that it allows us to expand an iterable such as an array or string in place using just `...`. Let's see it in action:

```js
const numbers = [1, 2, 3];
const string = ['fruit', 'vegetable'];

const combined = [...numbers, ...string];
console.log(combined); // Will be [1, 2, 3, 'fruit', 'vegetable']
```

This means you don't have to create a whole loop over the different arrays to create a new one, you can just use the spread operator. But it gets even better, you can also do it when looking at arguments to a function, as follows:

```js
const sendCongratulationsMessage = (name) => {
  console.log(`Congratulations ${name}, you passed the test.  Well done!`);
};

const sendConsolidationMessage = (name) => {
  console.log(
    `Sorry ${name}, unfortunately you did not pass your test. Let's see what we can do to get you back on track`
  );
};

const sendResultMessage = (grade, ...rest) => {
  if (grade < 6) {
    sendConsolidationMessage(...rest);
  } else {
    sendCongratulationsMessage(...rest);
  }
};

sendResultMessage(5, 'John');
sendResultMessage(9, 'Deedee');
```

This way we nicely got the logic of what is a passing grade into one function and could send the rest of the arguments through to the message functions.

An example where this happens a lot is in React, where you can create a hierarchy of components and then take away only the props you care about and send the rest through without defining anything about them.

## Default Parameter Values

In modern javascript it is also possible to set some default values for functions. Again it is easiest to just look at an example:

```js
const greeting = (name, greeting = 'Hello') => {
  console.log(`${greeting} ${name}, welcome aboard!`);
};

greeting('Burak');
greeting('Veronika', 'Привет');
```

This is a nice and simple way to set some default values without needing to add if statements. Beautiful!

## Destructuring

The destructuring syntax is great to grab values from objects and/or arrays in a simple way. Let's look at the same resulting code but then in the ES5 and ES6 syntax:

```js
const studentResult = {
  name: 'Mahmood',
  subject: 'React',
  grade: 9,
};

const showResult = (name, subject, grade) => {
  console.log(
    `Hi ${name}, you have ${grade >= 6 ? 'passed' : 'failed'} ${subject}`
  );
};

// ES5 | We add the ES5 on the variables to keep the code runnable, do not use bad names like that!
const nameES5 = studentResult.name;
const subjectES5 = studentResult.subject;
const gradeES5 = studentResult.grade;

showResult(nameES5, subjectES5, gradeES5);

// ES6
const { name, subject, grade } = studentResult;

showResult(name, subject, grade);

// ES6 | You can even rename the property as follows. Again don't use bad variable names like this
const { name: nameES6, subject: subjectES6, grade: gradeES6 } = studentResult;

showResult(nameES6, subjectES6, gradeES6);
```

That is how you destructure an object. You can do a similar thing with arrays, following is the same example but then with our data in an array:

```js
const studentResult = ['Mahmood', 'React', 9];

const showResult = (name, subject, grade) => {
  console.log(
    `Hi ${name}, you have ${grade >= 6 ? 'passed' : 'failed'} ${subject}`
  );
};

// ES5 | We add the ES5 on the variables to keep the code runnable, do not use bad names like that!
const nameES5 = studentResult[0];
const subjectES5 = studentResult[1];
const gradeES5 = studentResult[2];

showResult(nameES5, subjectES5, gradeES5);

// ES6 | With a bonus default value!
const [name, subject = 'JavaScript', grade] = studentResult;

showResult(name, subject, grade);
```

Note that we can even have default values while destructuring an array like we did with the subject in the example above!

## Async / await

If you have not learned anything about Promises yet, skip this part for now and wait until you understand that. This is a quite advanced addition to the modern JS repertoire.

The `async/await` syntax is a relatively new addition to JavaScript and is a more convenient way to "consume" promises as compared to the `.then()/.catch()` syntax.

Consider the function below that fetches data from a `url` passed as an argument. The [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) function built into the browser returns a promise that resolves to a [`response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object. This object includes an [`.ok`](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok) property that is `true` if the server returned a valid response and `false` otherwise. If `true`, the expected JSON data can be obtained by calling the [`.json()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) method on the the `response` object. This in its turn returns a promise that resolves to a JavaScript object representing the parsed JSON data.

If the response was not OK the example code returns a rejected promise with appropriate error information.

```js
function fetchData(url) {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`HTTP Error ${response.status}:  ${response.statusText}`)
    );
  });
}
```

With the newer `async/await` we can rewrite this function as follows:

```js
async function fetchData(url) {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error(`HTTP Error ${response.status}:  ${response.statusText}`);
}
```

Putting the keyword `async` in front of the function declaration will make this an asynchronous function. This has two effects:

1. This function will now return a promise. This promise will resolve to whatever value you `return`.
2. You can now use the `await` keyword inside the function body to "await" the settlement of a promise. If the promise is resolved the resolved value becomes available for subsequent use. In this example it is assigned to a variable. If the promise is rejected the `await` keyword effectively [throws](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) an error (i.e. the rejection value). Note that waiting for the promise to be settled is non-blocking.
3. Conversely, if you `throw` an error inside an `async` function it will return a rejected promise.

### Catching errors in async/await

As you might have noticed, the `async/await` keywords don't give us a way to catch errors like it does in the Promise object.

But before we get into that, we should discuss the type of errors that can typically occur in a JavaScript application.

> We generally talk about a _happy path_ and an _error path_ (or _unhappy path_) for your code.
>
> - The _happy path_ is the execution path through your code if all is well: no errors encountered.
> - The _unhappy path_ is the execution path through your code if an error is encountered.
>
> This section is about designing the _error path_.

- Your application can cause runtime errors because of incorrect JavaScript syntax or an incorrect data type. These are typically errors that you need to fix before shipping your application. Your application should not try and catch such errors. They will usually turn up as unhandled errors in the console. Make fixing them your top priority.

- Anticipated application and/or infrastructure errors. Examples are network errors, data corruption errors, data validation errors, etc. These types of errors can be expected and should not crash your application if they occur.Instead your application should be resilient to them and recover as gracefully as possible. This might involve informing the user of the situation and suggesting remedial action where possible.

When calling the earlier `fetchData()` example function (either version) from a higher level function this could be done using the `.catch()` method of a promise object

In the Promise object, we can use the function `catch` to take care of errors. It takes in a callback, which automatically receives an error object. Here's an example:

```js
function fetchAndRender() {
  fetchData('https://randomuser.me/api/'')
    .then((data) => {
      // TODO: Render the data
    })
    .catch((error) => {
      // TODO: Oops, no data: handle the error instead
    });
}
```

With the `async/await` keywords, we don't get a `catch` function to use. So instead we have to use some other solution: the `try...catch` block.

```js
async function fetchAndRender() {
  try {
    const data = await fetchAsync('https://randomuser.me/api/');
    // TODO: Render the data
  } catch (error) {
    // TODO: Oops, no data: handle the error instead
  }
}
```

An error thrown in a function can be caught in any higher level function that is in its call chain (i.e., lower in the call stack). In the current example the error could be caught in `fetchData()` itself or, as is done here, in the calling `fetchAndRender()` function.

When an error is thrown in some function, JavaScript will walk down the call chain (starting from the function throwing the error) until it finds a function with a `try...catch` block. If found, it will execute its `catch` block. If no function with a `try...catch` block is found in the call chain, the error will be passed on to the host environment (browser or Node.JS) and will cause the current execution to terminate with a runtime error and stack trace in the console.

Notice that in this example we did not catch the error inside the `fetchData()` function. Let's suppose we tried that as in the next example:

```js
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
    throw new Error(`HTTP Error ${response.status}:  ${response.statusText}`);
  } catch (error) {
    console.error(`Oops, something went wrong: ${error.message}`);
  }
}
```

If an error occurs inside the `fetchData()` function the `catch` block executes, which logs the error to the console. With the error now "handled" (i.e. "consumed") by the `catch` block, the function subsequently returns with `undefined` as its return value. The calling function, in our example `fetchAndRender()`, no longer sees an error, as `fetchData()` already "handled" it. Instead, it now receives the value `undefined` and assigns that to the `data` variable. Obviously this will result in undefined behaviour.

Here is how it is worded in [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#description):

> _Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function._

In the example function above the exception _is_ caught and therefore it returns a resolved promise with the value of `undefined` (because `fetchData()` has no explicit `return` value) rather than a rejected promise with the error.

If you would like your function to log an error to the console while still passing on the error to the calling function you can "rethrow" the error inside the `catch` block, like this:

```js
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
    throw new Error(`HTTP Error ${response.status}:  ${response.statusText}`);
  } catch (error) {
    console.error(`Oops, something went wrong: ${error.message}`);
    throw error; // <== rethrow the error
  }
}
```

Now the added `throw` in `fetchData()` is uncaught in the function itself resulting in a rejected promise that can be caught in the calling function.

Finally, you may have noticed that we added an `await` keyword when returning the result from `response.json()`. The `response.json()` method may return a rejected promise in case the response text cannot be parsed as valid JSON. The added `await` keyword ensures that an [exception is thrown](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#exceptions) inside the `try` block of `fetchData()` if `response.json()` returns a rejected promise. This will then be caught by the `catch` block which causes parse error to be logged to the console before it is rethrown.

If the `await` keyword was left out the rejected promise was returned directly to the calling function (in our example that would be `fetchAndRender()`) without anything being logged to the console.

### Extra reading about Async/await

- [Async JS Crash Course - Callbacks, Promises, Async/Await](https://www.youtube.com/watch?v=PoRJizFvM7s)
- [JavaScript Try Catch & Error Handling ES6 Tutorial](https://www.youtube.com/watch?v=ye-aIwGJKNg)
- [Error handling, "try..catch"](https://javascript.info/try-catch)

# Extra reading

If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [ES6 JavaScript tutorial](https://youtu.be/WZQc7RUAg18)
- [Traversy Crash Course](https://www.youtube.com/playlist?list=PLillGF-RfqbZ7s3t6ZInY3NjEOOX7hsBv)
- [ES6 tutorial](https://www.programiz.com/javascript/ES6)

If you like to know about the history of how JavaScript evolved, have a look at the following:

- [The History of JavaScript | Why is JavaScript also called ECMAScript?](https://www.youtube.com/watch?v=JpwxjkpZfhY)
- [The Weird History of JavaScript](https://www.youtube.com/watch?v=Sh6lK57Cuk4)
- [What Is ES6, ES2015, ES2016, ES2017 & ESNext](https://www.youtube.com/watch?v=9A_jkh2AKR8)
- [The Future of JavaScript - New Features and Disruptive Trends in 2020](https://www.youtube.com/watch?v=f0DrPLKf6Ro)
