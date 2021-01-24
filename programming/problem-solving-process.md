# Problem Solving Process

(tips for non-programmers)

### Index
* [the problem-solving process](#the-problem-solving-process)
  1. [understand and define](#1--understand-and-define)
  1. [divide](#2--divide)
  1. [finding the right technique](#3--finding-the-right-technique)
  1. [experiment](#4--experiment)
  1. [debug](#5--debug)
  1. [reflect](#6--reflect)
* [fruit vendor example](#fruit-vendor-example)


---

## The Problem-Solving Process

Many people think programming is just about the code, 0’s and 1’s, about frameworks, technical stuff, or complicated words that just confuse us.

However, to be a good programmer ​__the most important thing is to be good at problem solving__. ​We program computers because we have:
1. A problem/need
2. We want to use the computer to help us solve that problem / need

This chapter discusses the six steps of problem solving. This gives you a step-by-step approach on how to analyze and write code.

### 1. Understand and define

The key to problem solving, is to really understand the problem. Write down the problem exactly or explain the problem to someone else, until you clearly understand what the problem is you are trying to solve. Many times, software developers start fixing problems without really knowing what the problem is (or what the client wants).

###​ ​2. Divide

Big problems (or challenges) should be divided into smaller problems, so that the problems become easier to solve. What seemed like a big monster problem, now just is a lot of small monsters on top of each other. For instance, if you want to loop through an array and select certain data from it, these are already two steps (making a loop and selecting data). The more you are able to divide big problems into small ones, the better.

###​ ​3. Finding the right technique

Now it is time to think about the techniques you know that could possibly help you to solve this problem (e.g. loops, if statements, filter, map etc.). If you do not find an appropriate technique you will have to find it. In both cases Google will probably be your best friend. Remember, most developers spend hours per day on Google trying to find solutions to their problems!

### 4. Experiment

Now try out some of the techniques you have found. Often it works well to first try out the technique on an easy example you have made yourself, before you try to solve the problem. Experiment with some examples so that you really understand what the technique is capable of. After that, put it all together and see if your code gives you the expected results.

### 5. Debug

Often your code does not do what you want it to do. There is only one reason why this is the case: ​Your logic is not sound​.

In the end the computer only executes on instructions that are written in a way it understands. Generally, there can be 2 reasons for your code not doing what you want:
1. The computer throws an error.
2. Your code returns an incorrect value that doesn’t solve your problem

Whenever this happens, you can do the following:
* In case 1, make sure that you carefully read the error message, as it often
gives you a good hint where the problem lies within your code. This should be
the first thing to look for when something went wrong.
* Check for syntax errors. Use JsLint for this (an extension for VSCode that
helps you find syntax errors). Most of your mistakes will be simple
spelling/syntax mistakes.
* Use the debugger to understand what steps the computer goes through when
interpreting your code, and find where it goes wrong. Try to explain each part
of the code to yourself of what it does exactly.
* Formulate your problem in clear terms to google and search for solutions
* Ask people in your class/teacher or take a break and look back at your
problem with fresh eyes.

### 6. Reflect

After all this, it is time to reflect on what you have done. Are you happy about how you solved the problem? What went well and what did not?

Most people tend to skip this step. “Why do I need to do this? I have already solved the problem!”. However, you will notice that if you do take some time to reflect on your code and problem-solving approach, you will improve your analytical mindset and become better at memorizing some parts of your code.

Reflection also includes ​refactoring​. Refactoring is the process of rewriting your existing solution into better looking, better functional, readable code. Often times you will find that you have solved a problem, but that doesn’t necessarily mean that you have solved it in the best possible way, or that you completely understand all the concepts you have used.

In summary, reflection includes the following steps:
* how could I rewrite this code for simplicity and better readability (refactoring)
* what concepts in your code you don’t understand yet 100% (even though it
works), and study them.
* what you can learn from other solutions (by looking at other solutions of the
same problem)?
* what would you do differently next time?

[TOP](#how-to-study-programming)

---

## Fruit Vendor Example

Let’s use an example to explain these 6 steps in more detail. ​Note that the example below is a bit advanced if you are just starting our course.

Imagine a fruit vendor on the market. The fruit vendor has a couple of different fruits he is selling. However, he also has some rotten fruits. His fruits are represented through an array of strings: ["apple","rottenBanana","mango"].

The fruit vendor has hired you to write a program that takes out the rotten fruit and only tells you which fruits are not rotten.

### Understand and define (1)

In our example understanding and defining the problem seems pretty straightforward. Indeed, we need to write a program that takes out the rotten fruit and returns the fruits that are not rotten.

However, let’s try to make this a bit more specific. We have to write a program that first takes an array of strings containing fruit names as input. It then filters out the strings that do not contain the word “rotten” and gives them as output.

### Divide (2)

We now know what we want to do in a general sense, but can we divide our problems in a few different problems? Yes, we can:
1. Declare a variable named ​fruits w​ ith the fruits mentioned in the example
1. Define an empty function named ​TakeOutRottenFruit
1. Inside the empty function write instructions that take out the strings containing the word “rotten”.

### ​Finding the right technique (3)

After going over our notes and the curriculum We discover that the filter() function could be used to filter out elements in an array.

However, the documentation on Mozilla Development Network also tells us that it will return “a new array with all elements that pass the test implemented by the provided function”. That means we still have to instruct our computer to select the string(s) which contain the word ‘rotten’.

After some more googling, we find out that includes() is a function that allows us to check the content of a string. Let us try to combine the two!

### Experiment (4)

This leads us to write the following code:
```js
const fruits = ["apple", "rottenBanana", "mango"];

function takeOutRottenFruit(arrayOfFruits) {
  const goodFruitsArray = arrayOfFruits.filter(fruit => fruit.include("rotten"));
  return goodFruitsArray;
}

const freshhhh = takeOutRottenFruit(fruits);
```

### Debug (5)

When we write the code under step 4 in the Google Chrome Console we get the following error: ​Uncaught TypeError fruit.include is not a function

Probably we have made a small typo. Let’s google the include function. When we do, we notice that we should use fruit.includes (with an -s at the end).

When we run the following code, it does not give any errors anymore.
However, I do notice that only ​rottenBanana ​is selected and displayed.

Hmmm, what to do? Let’s go back to the basics. I remember that in my JavaScript 1 Module I learned something about ​operators.​ Indeed, I find that you can use the ​```!``` operator​ to return what is not ​true​ (everything that does ​not​ contain the word rotten). Let me try to add the ​```!``` operator.

```js
const fruits = ["apple", "rottenBanana", "mango"];

function takeOutRottenFruit(arrayOfFruits) {
  const goodFruitsArray = arrayOfFruits.filter(fruit => !fruit.includes("rotten"));
  return goodFruitsArray;
}

const freshhhh = takeOutRottenFruit(fruits);
```

_Yay! It seems to work!_

### Reflect (6)

> missing.  hmmm, isn't this the most important?
