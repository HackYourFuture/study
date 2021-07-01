# Debuggers

Before diving straight into the different tools for debugging your code, take a second to think about what debugging is and why a debugging tool might be helpful. Here's an overly simple way to think about debugging:

> When your program does something different than what you expect it to, this is a bug.
>
> "Debugging" is changing your code from what it _does_ do (the bug) to what you _expect_ it to do.

Simple enough, but how do you get started? You can think about debugging as having 4 main stages, the **Debugger** tools in this page of the study book are most helpful for step 3:

1. **Understand what your code _should_ do**: It's hard to solve a problem if you don't know when you've found a solution! Understanding a program's expected behavior is what code _specifications_ and _tests_ are for, head over to those chapters of the Study Book to learn more about understanding code's expected behavior.
2. **Understand what your code _actually_ does**: This is usually simple enough, run the code and see what happens! Does the button turn the wrong color when you click it? Is there an error logged to the console?
3. **Find the problem line(s) of code**: This is the most important part! If you can't figure out exactly which line(s) of code are causing problems, your best hope is to randomly change things. Random changes is a recipe to make things worse :( Inspecting program memory and stepping through your code one line at a time are necessary skills for discovering which line(s) of code are causing your program to break.
4. **Fix the problem line(s) of code**: This step is very difficult and can take a long time to master. Becoming a master debugger will take many hours of: reading other people's code to learn what good code looks like, collecting different strategies for different situations, and lots and lots of practice.

So let's take a look at some tools available to help you with #3, tools that will help you step through your code and understand what is happening in memory:

## Console Logs

Using `console.log` is the simplest debugging tool available. When you console.log a variable, you're printing the value that is stored in memory. If that value is different than what you expected then it's time to start debugging (careful though! sometimes the value is what you expect, but you expected the wrong thing ;))

As you explore your code you can remove and add logs at different lines to narrow down which part of your program is confusing.

- **Pros**:
  - it's easy to add or remove logs
  - works in Node, the Browser, JS Tutor, and any other JS environment
  - you can focus in on a few lines of code without being distracted by everything else in memory (unlike the other debugger tools)
- **Cons**:
  - you will only find what you look for. If you don't think of logging a variable, then you cannot see what it stores. Very often mistakes occur where you don't expect them to!
  - logs will give an incomplete idea of your code's execution, it's always possible to figure out which line of code was executed before your log or after. Often this is the information you need to fix your problem.
  - console logs can not give you a full picture of how program memory is organized, and how it changes over time in your program. For this reason, logging is often most helpful with code you mostly understand instead of code you mostly _don't_ understand.

## JS Tutor

[JS Tutor](http://www.pythontutor.com/) is a website that helps you learn how JavaScript program memory operates, and how each line of code interacts with stored values. Although technically not a debugger, JS Tutor does help gain a deeper knowledge of your code so it is included here.

- **Pros**:
  - correct and clear visualizations of everything happening in program memory, for each step of execution
  - you can skip to any line of code then step forwards _and_ backwards, so its very easy to study one or two lines of code
  - there is a live chat so you can (almost) always find someone to help you with your code
- **Cons**:
  - JS Tutor does not support all of JavaScript, you can only visualize code that uses the core features of JS (ie. no DOM, no APIs, no `import`/`export`, ...)
  - the visualizations get messy for large programs, programs with large objects/arrays, and programs with complicated data. You won't always be able to isolate your bugs to study them in JS Tutor

## Browser Devtools

All browsers have built-in debuggers for JavaScript code (but we recommend either Chrome/ium or Firefox). Your browser's debugger will show you _everything_ that is happening in your program's memory. This will be overwhelming at first, so many panels and buttons and displays and tabs. But with some practice you'll learn to focus in on what's important.

If you get used to your Browser's debugger early on in your programming life while your programs are still simple, you will have a much easier time with the more difficult concepts in JS and web development.

- **Pros**:
  - good debugging for the trickier parts of JS like `this`, closure, and the callstack (once you already have some idea of how they work)
  - a complete overview of (nearly) everything happening in your website, not just your JS scripts. this includes: network requests, the DOM, event listeners, and much more.
  - very accessible. it's right there in your browser, ready to study any web page! After learning to use your DevTools every web page becomes an example to study.
- **Cons**:
  - visualizations in the browser's Debugger assume you already have an idea of how JS works, it's great for learning _more_ about JS but not the best for taking the first steps. It's a good idea to study code in JS tutor first, then study it in the debugger
  - often too much information, it will take time and practice to learn what's important for your program and what's not.
  - not exactly the same in each browser, there are little differences in the devtools of all the major browsers. It's worth taking the time to practice in each one.
  - you can only step forward through your code. it can be a little annoying to find your way back to the line you wanted to study if you accidentally click over it
  - can not be used to debug code written specifically for Node.js. Anything with `require` or `module.exports` will not work : (

## VSCode Debugger

Visual Studio Code comes with it's own Node.js debugger built in, you can debug .js files without needing to install or configure anything. Have a look at the documentation on it [here](https://code.visualstudio.com/docs/editor/debugging).

- **Pros**:
  - all in one place! you can debug a .js file in the same place you write it.
  - breakpoints are saved for later. If you place a breakpoint in a file, it will be there the next time you study that project (unlike in the browser). VSCode has features built in for managing all your breakpoints.
  - configurable. Using a `launch.json` file you can configure your VSCode debugger to work in many different ways. This may not be interesting at first, but will become helpful as you become a more advanced programmer
  - can be used to debug anything written in node.js, this will become especially important in the second half of HYF when you begin exploring the file system, databases and the backend.
- **Cons**:
  - Less interactive console output. In the browser console output is nicely interactive, and can be expanded or collapsed. the VSCode console logs all data as plain text and makes it much more difficult to explore objects and arrays
  - when you run even a simple .js file your scope will have extra values that can make things more difficult at first. Students often find the VSCode debugger to be less helpful for learning than the Browser's
  - does not support code that is written for browser-specific features without extra dependencies. (ie. `document.`, `fetch`, and `prompt`/`alert`/`confirm` to list a few)

## VSCode Extensions

There are many VSCode extensions that can help you understand debug your code as you write it. Try a few out and see which you like!

- [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode&ssr=false#review-details) - get real-time program output and info about your program's memory directly in your editor.

---

# Extra Reading
- [The definitive guide to JavaScript Debugging](https://dev.to/atapas/the-definitive-guide-to-javascript-debugging-2021-edition-116n)
- [How to use a debugger (Code language is python)](https://www.youtube.com/watch?v=7qZBwhSlfOo)
- [Use debugger in chrome and VSCode](https://www.youtube.com/watch?v=AX7uybwukkk)
