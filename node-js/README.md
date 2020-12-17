# Node.js

In this page we introduce [Node.js](https://nodejs.org/en/about/), what it does and why you would want to use it.

## <a name="what-is-node">What is Node.js?</a>

Node.js is a **JavaScript runtime**  in which JavaScript code is executed.

Computers can't understand human readable programming languages such as JavaScript by themselves. They need a program to translate these high level languages into machine language which can then be executed. Node.js uses the **V8 JavaScript engine** to **translate JavaScript into machine code** which is then executed on your computer.

> TODO: Add diagram JS -> JS Runtime -> Machine code

Node.js is more than just the V8 JavaScript engine. It's also a **library with many built-in modules** that can perform **asynchronous I/O operations** to [prevent JavaScript code from blocking](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/). When Node.js needs to perform an I/O operation, such as reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume operations when a response comes back. This is accomplished through the [event loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/).

Which application on your computer also has a JavaScript runtime? [Answer](./Questions#browser)

## <a name="what-can-node-do">What can Node.js do?</a>
As mentioned above you already have a JavaScript runtime on your computer. So what can Node.js do that your browser can't?

Browsers are designed to display **web applications** that users can interact with. These web applications run on your own personal device and are often referred to as the **front-end**: they are about what a user can see and interact with, much like a store front.

The opposite of the front-end is the **back-end**, which provides services that your front-end might need to work properly. Back-end computers are called **servers** because they provide a service, whereas front-end computer are called **clients**. This architecture is called the client-server model. Clients communicate with servers through a **request-response cycle**: each time the client needs something it sends a request to the server who will provide a response with the needed information.

Which applications do you know where the client-server model is used? [Answer](./Questions#client-server)

<img src="https://i.imgur.com/kh2JveL.png" alt="Request-response cycle" width="70%"/>

Common tasks that servers need to perform include hosting web pages, sharing files, providing email communications, etc. These tasks require access to the file system and other interactions with the computer which browsers don't support for security reasons. This is where Node.js comes into play, it provides functionality to perform file operations and interact with your device so it can perform all the necessary operations to act as a server.

Why do web browsers not allow access to the file system? [Answer](./Questions#security)

In summary Node.js provides a JavaScript runtime with extra functionality to perform tasks that a browser won't do on your device. This allows us to use JavaScript in the back-end to provide services, develop desktop applications or write command line tools.

## <a name="why-use-node">Why would you use Node.js?</a>

There are plenty of different types of server software available which use a wide variety of languages. So why would we choose to use a Node.js server over others?

It uses JavaScript, it's as simple as that. JavaScript is one of the most popular programming languages because it is used in web browsers and the web is everywhere. Many (aspirant) web developers such as yourselves are familiar with JavaScript so why not use it in the back-end as well instead of learning a new language?

Another good reason is that Node.js handles I/O such as file access and network connections very well. It uses an **event-driven**, **[non-blocking I/O](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)** model that makes it lightweight and efficient.  This is accomplished through the **[event loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)**:

![Node.js Event Loop](https://user-images.githubusercontent.com/1400753/29651102-37272546-88e2-11e7-91fd-ea8e257a4df6.png)

Node.js comes with, **npm**, the largest ecosystem of open source libraries in the world.
Many functionalities that you might need such as utility functions, process management or interacting with a database have already been made. They are published as packages on npm and you can import them in your project to get started. Don't reinvent the wheel.


## Node.js Tutorials

These tutorials will introduce you to a bunch of new features in Node that you haven't seen in the Browser.  While you're following these tutorials, it's important to remember that at it's core Node.js is still JavaScript.  Everything you've learned so far (except for the DOM & `fetch` :) is still true!  The Event Loop, Classes, Closure, Arrays, Objects, Variables, `this.`, it's all still the same.


The tutorials below will introduce to what's new and what's special about Node.  But don't forget to take some time and solve a few of the JavaScript Exercises above to get used to working with plain, vanilla JS in the terminal.

* [Traversy: Node for Absolute Beginners](https://www.youtube.com/watch?v=U8XF6AFGqlc)
* [Traversy: Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)
* [Mosh: Node.js in 1 Hour](https://www.youtube.com/watch?v=TlB_eWDSMt4)
* [Net Ninja](https://www.youtube.com/watch?v=w-7RQ46RgxU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=1)


## In-Depth

* [The inside of the inside of Node.js](http://docs.libuv.org/en/v1.x/guide/introduction.html)



# Useful links

## <a name="introduction">Introduction to Node.js</a>
* [Introduction to Node.js (Video, ~5 minutes)](https://www.youtube.com/watch?v=w-7RQ46RgxU&index=1&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp)
* [The V8 Engine (Video, ~5 minutes)](https://www.youtube.com/watch?v=86tgU7UaJmU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=3)
* [Node.js Guides](https://nodejs.org/en/docs/guides/)
* [Introduction to Node.js (Reading, ~10 minutes)](https://nodejs.dev/introduction-to-nodejs) - plus much more!
* [What is Node.js? What can you do with it? Why should you use it? (Reading, ~10 minutes)](https://medium.com/@paynoattn/what-is-nodejs-what-can-you-do-with-it-why-should-you-use-it-8c8d6df32d6d#.qvbp8g4dq)
* [Node.js Event Loop (Video, ~15 minutes)](https://youtu.be/PNa9OMajw9w)
* [Try the event loop yourself (Loupe)](http://latentflip.com/loupe)
* [Node.js examples to study](https://github.com/tertiarycourses/NodeJSTraining)
* <a href='https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/'>NodeJS: argsv</a>

## <a name="getting-started">Getting started with Node.js</a>
* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web)
* [Official Node.js Documentation](https://nodejs.org/docs/latest-v10.x/api/documentation.html)
* [Node.js Documentation with Search function](https://devdocs.io/node~10_lts/)
