
# What is DOM Manipulation?

**DOM manipulation** refers to the activity of selecting and modifying DOM elements. The main reason why this is done is that **you want to show the user different things depending their activity**, for example if you click on a [hamburger menu icon](https://bit.ly/2Yr4O7Z) and a navigation menu slides in.

Finding the right elements is called **traversing the DOM**. Traversing the DOM essential means: using JavaScript to select certain elements within the DOM in order to modify them (change color, size or make them disappear, for example).

### Manipulating elements

Look at the following code sample:

```js
const body = document.querySelector('body'); // you can also use 'document.body'
const newParagraph = document.createElement('p');
newParagraph.innerText = 'This paragraph will be added to the body!';
newParagraph.style.background = 'red';
body.appendChild(newParagraph);
```

In this example we're executing the following steps:

1. Selecting the body: this is always necessary, as we can only add or remove elements from the body of the document
2. Creating a new DOM element: a paragraph i.e. a `<p>` element
3. Injecting content into the newly create paragraph element
4. Setting the background color for the newly create paragraph element
5. Adding the  newly create paragraph element element to the body

Test this code out by copying and pasting it in the Developer Console of your browser. After you've pressed the Enter/Return key you will find your new `<p>` at the end of the page!

Learning how to write JavaScript that targets the DOM is an essential part of being a web developer. In the following resources you'll more about how to do that:

- [Traversing the DOM with JavaScript](https://zellwk.com/blog/dom-traversals/)
- [JavaScript DOM Crash Course - Part 2](https://www.youtube.com/watch?v=mPd2aJXCZ2g)

### Browser events

Browser events (also known as DOM events) are very much like real-life events: they are important things that happen. In real-life this could be getting a job, graduating from school or receiving a birthday gift. In terms of the browser, this is much more small scale: user actions like `clicking`, `scrolling` or `typing` are all considered events.

These events are important to know about, because based on those we manipulate the DOM. For example, user clicks on an image and as a result it increases in size.

Effectively it's cause and effect.

Check out the following resources to learn more about what events there are, and what you can do to manipulate elements after an event has happened:

- [What are browser events?](https://www.youtube.com/watch?v=LeKKU3a4AQo)
- [Introduction to browser events](https://javascript.info/introduction-browser-events)
- [JavaScript DOM Crash Course - Part 3](https://www.youtube.com/watch?v=wK2cBMcDTss)

### Event listeners and handlers

Take a look at this code:

```js
const body = document.querySelector('body');
body.addEventListener('click', function () {
  body.style.background = 'black';
});
```

Test this code out by copying and pasting it in the Developer Console of your browser. After you've pressed the Enter/Return click the website. You should see the whole `<body>` becoming black!

This is DOM manipulation in its simplest form. It goes in three essential steps:

(1) An event happens ("User clicks on the page")
(2) JavaScript is aware and looks for this specific user action (The browser is listening for the event, in this case a `click` event)
(3) JavaScript modifies the DOM as a result (A function that makes the body background color black is executed)

The second step is called **listening for the event**. We do this by using a by the browser predefined function called `addEventListener()`, which we get from the `document` object in the browser. The browser needs to listen to the event in order to know what it should do ("make the body background color black") in case a certain event (`click`) happens to a certain element (`body`).

The third and final step is called **handling the event**. The term "handler" effectively means "taking care of" the event; the response to the event. The handler itself is nothing more than a function that executes more JavaScript code in order to manipulate a particular part of the page (either the element that experienced the event or a totally different part of the page).

- [Events in JavaScript](https://www.youtube.com/watch?v=7UstS0hsHgI)
- [JavaScript Events Tutorial](https://www.youtube.com/watch?v=e57ReoUn6kM)

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [javascript.info/document](https://javascript.info/document)
- [javascript.info/events](https://javascript.info/events)
- [`onclick` vs. `.addEventListener('click', handler)`](https://www.youtube.com/watch?v=7UstS0hsHgI)
- [What are event listeners in JS?](https://www.youtube.com/watch?v=jqU3uaRgQyQ)
