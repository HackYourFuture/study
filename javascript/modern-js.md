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

console.log(`Hi ${name}, you have ${grade >= 6 ? 'passed' : 'failed'} your test`);
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

### Extra reading on arrow functions:
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
console.log(combined) // Will be [1, 2, 3, 'fruit', 'vegetable']
```

This means you don't have to create a whole loop over the different arrays to create a new one, you can just use the spread operator. But it gets even better, you can also do it when looking at arguments to a function, as follows:

```js
const sendCongratulationsMessage = (name) => {
  console.log(`Congratulations ${name}, you passed the test.  Well done!`);
}

const sendConsolidationMessage = (name) => {
  console.log(`Sorry ${name}, unfortunately you did not pass your test. Let's see what we can do to get you back on track`);
}

const sendResultMessage = (grade, ...rest) => {
  if (grade < 6) {
    sendConsolidationMessage(...rest);
  } else {
    sendCongratulationsMessage(...rest);
  }
}

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
}

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
}

const showResult = (name, subject, grade) => {
  console.log(`Hi ${name}, you have ${grade >= 6 ? 'passed' : 'failed'} ${subject}`);
}

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
  console.log(`Hi ${name}, you have ${grade >= 6 ? 'passed' : 'failed'} ${subject}`);
}

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
If you have not learned anything about Promises yet, skip this part for now and wait until you understand that. This is a quite advanced addition to the modern JS repetoire.

Async/await is syntax to help make callbacks more readable. Here's what async/await might look in action:

```js
async function fetchData () {
  const fetchedData = await fetch('https://randomuser.me/api/');
  const parsedData = await fetchedData.json();
  return parsedData;
}
```

How do we use it? We put the keyword `async` in front of the function declaration that will contain asynchronous code. Then in every line that returns a Promise we put the keyword `await` in front. That's it. Now the function will wait for the return of the fetch promise and grabbing the data before continuing to the next line.

### Catching errors in async/await
As you might have noticed, the `async/await` keywords don't give us a way catching errors like it does in the Promise object.

But before we get into that, we should define "catching errors" a little bit. By "catching errors" we mean:

1. that a line of code has caused an error (because of incorrect syntax or data type)
2. that the program has shutdown to prevent any other errors from happening
3. that the application gives feedback to the developer and/or user about where the error came from

In the Promise object, we can use the function `catch` to take care of errors. It takes in a callback, which automatically receives an error object. Here's an example:

```js
Promise.catch(function(error) {
  console.log(error);
});
```

With the `async/await` keywords, we don't get a `catch` function to use. So instead we have to use some other solution: the `try... catch` block. It's also an addition to the language, given to us by **ECMAScript 6**:

```js
  // This function will run. If anything goes wrong...
  async function fetchData () {
    try {
    const fetchedData = await fetch('https://randomuser.me/api/');
    const parsedData = await fetchedData.json();
    return parsedData;
    } catch (err) {
      // ...the code in this block will execute. The error that has been created will now be inserted into `err`
      console.log('Oops, something went wrong!', err);
    }
  }
```

### Extra reading about Async/await
- [The Evolution of Callbacks, Promises & Async/Await](https://www.youtube.com/watch?v=gB-OmN1egV8)
- [Async JS Crash Course - Callbacks, Promises, Async/Await](https://www.youtube.com/watch?v=PoRJizFvM7s)
- [JavaScript Try Catch & Error Handling ES6 Tutorial](https://www.youtube.com/watch?v=ye-aIwGJKNg)
- [Error handling, "try..catch"](https://javascript.info/try-catch)

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

* [Traversy Crash Course](https://www.youtube.com/playlist?list=PLillGF-RfqbZ7s3t6ZInY3NjEOOX7hsBv)
* [ES6 tutorial](https://www.programiz.com/javascript/ES6)

If you like to know about the history of how JavaScript evolved, have a look at the following:

* [The History of JavaScript | Why is JavaScript also called ECMAScript?](https://www.youtube.com/watch?v=JpwxjkpZfhY)
* [The Weird History of JavaScript](https://www.youtube.com/watch?v=Sh6lK57Cuk4)
* [What Is ES6, ES2015, ES2016, ES2017 & ESNext](https://www.youtube.com/watch?v=9A_jkh2AKR8)
* [The Future of JavaScript - New Features and Disruptive Trends in 2020](https://www.youtube.com/watch?v=f0DrPLKf6Ro)
