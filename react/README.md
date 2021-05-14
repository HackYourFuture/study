# React

If you go to the official website of [React](https://www.reactjs.org) you'll read the following:

```
A JavaScript library for building user interfaces
```

While completely true, this simple description means quite a lot more to the junior developer. React is a library that provides benefit to both the user and the developer.

For the user the main benefits are that (1) it's really fast, (2) very interactive and (3) like a mobile application. All of this increases the user experiences much more than traditional websites.

For the developer the main benefits are that (1) it allows us to split our application up into smaller pieces (we call them components), (2) we can use the latest version of JavaScript (ES6/7/8), and (3) it is backed by a strong developer community (Facebook and others).

> When learning any technology or package, it's important to keep in mind how well supported by other developers it is. This is important, because you want the technology to be maintained and updated continously. Remember, software always builds on software. It's never isolated. If the technology you've chosen gets outdated it won't work well with other tools anymore. You can't write everything yourself, so if this happens it's best to move on to something better.

Learn more about the React philosophy here:

- [What is React?](https://www.w3schools.com/whatis/whatis_react.asp)

### What React is not

The longer you look at React code, the harder it seems to distinguish what exactly it is that makes it "React" code. But in reality there's only `JSX`, predefined functions (like `render` or `useState`) and the idea of `component lifecycle` given to us by the React and ReactDOM libraries.

The rest is "just JavaScript": (higher order) functions, importing/exporting, Promises, event listeners and others.

In order to optimally prepare for learning React, therefore, it's important to have strong fundamental understanding of JavaScript. Otherwise you won't be able to make the distinction between what React is and what it is not.

In the video below Brad Traversy gives a nice overview of what JavaScript to know before going into any bigger framework (like React) so that you can identify what React gives you:

{% hyf-youtube src="https://www.youtube.com/watch?v=qi9VQqYcXqY" %}

### Componentization

Just like how we say "in HTML everything is a box" and "in JavaScript everything is an object", the same thing can be said about React. However, "in React everything is a component".

But what do we mean by `component`? Simply put: it's a part of a website. For example, take a look at the following image:

![Componentization](./assets/componentization.png)

The sections with a red outline are examples of a component. Why would we want to split our webpage up into components? **We don't want to rewrite the same code**. Instead, we want to be able to **reuse the same code** structurally, and just be able to change the content.

What do we need to think about when deciding something should be a component? We look at **reusability**. A component looks at the commonalities in parts of the page and extracts them into one mold. Then it provides a way for us to give each `component instance` different content.

The navigation bar in the image is made up of 7 instances of the same component, let's call it `NavbarItem`. We make sure we know what the content is of each instance: in this case the names for each page in the website. And then we just pass those values to each instance.

Essentially, a component is a custom HTML element that we define ourselves. One of our volunteers explains it well in the following video (after 1:13):

{% hyf-youtube src="https://www.youtube.com/watch?v=pOTnbJdpEmk" %}

The main thing to remember is that Components should follow the Single Responsibility Principle as much as possible. So each component should only have 1 responsibility.

### HTML in JS: JSX
One of the things React introduces that is extremely powerful is JSX, a way to define HTML style code in JavaScript.

Take a look at this code:

```js
const Example = () => {
  return <div>This is an example component</div>;
};
```

Can you spot the HTML in the `return` of the function? Well actually, it's not HTML but a special type of JavaScript that is entirely React specific: it's called `JSX`. It stands for JavaScript XML, meaning it's an XML/HTML-like extension to JavaScript.

One of the reasons for the existence of `JSX` goes back to the whole idea of `encapsulating` elements of our webpage: we want to combine HTML, CSS and JavaScript into one so that we can write reusable components that we then just have to copy to wherever we'd like to use them.

In order to write valid `JSX`, we need to import the React library into our file. Without it, it won't be able to interpret it.

Learn more about `JSX` here:

- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)

### DOM management
When you want to write single page applications in vanilla JS you will notice that DOM management can be a headache. The reason is that you have to write the code that takes the DOM from the place it is now to where you want it to be.

React takes this management away from you. This means you just need to define how the DOM should look now (using your components and JSX) and React will do the rest! Awesome!
