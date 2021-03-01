# Closures

Simply put, a closure is a function that is defined inside another function. This special function has access to the outer scope (and thus its variables), the scope that's created by the function that contains the closure function.

That's nice and all, but in order to really understand what it is and why we need it we need to take a look at another concept.

### Execution context

The execution context roughly equates to the 'environment' a function executes in. This consists of the following:

- The variable scopes
- Function arguments
- The value of the `this` object (more on that in JavaScript3)

Checkout the following to learn more about why this is important:

- [What is the Execution Context & Stack in JavaScript?](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0)

### Why do we need closures?

Closures are commonly used to give objects data privacy. We don't want certain data to be available globally. Think of it as "keeping something a secret. Take, for example, the following situation:

> You want to log in to your email account, so you need a password. Usually you have that password in your head, or somewhere written down in a place that can only be accessed in a certain way. It's not out there in public, able to be accessed by anyone.

In this example your password is the data you want to keep locally scoped. Your act of logging in is the inner function. The outer function could be your act of being on the computer, where your password is stored in a file somewhere.

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [The Ultimate Guide to Execution Contexts, Hoisting, Scoping and Closures in JavaScript](https://www.youtube.com/watch?v=Nt-qa_LlUH0)
- [Understanding Closures](https://www.youtube.com/watch?v=rBBwrBRoOOY)
- [Master the JavaScript interview: what is a closure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
- [I never understood JavaScript closures](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)
- [Closure in Javascript](https://www.youtube.com/watch?v=71AtaJpJHw0&t=7s)
- [Closures in JavaScript | Inside a loop, inner function and setTimeoout](https://www.youtube.com/watch?v=-xqJo5VRP4A)