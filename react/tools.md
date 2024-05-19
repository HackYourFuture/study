# React Tools

There are a lot of tools available for the React developer that you can make use of.

## React dev tools

React adds a new layer to your code that solves a lot of problems but does add complexity as well. To help you out there is a browser extension that allows you to inspect your react components in the browser which makes it a lot easier to follow what your app is doing. Have a look at the following video that gives a small introduction to the extension (there are a lot of different videos out there):

{% hyf-youtube src="https://www.youtube.com/watch?v=rb1GWqCJid4" %}

Important is what The Net Ninja says in the end: 'The best way to become familiar with this is to dive in and play around with it'!

Download the extensions here:

- [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/react-devtools/)

## Create-react-app

The React team themselves have provided a tool to quickly set up a React application with Babel, webpack and ESLint already configured. It also makes sure that the instant reload functionality is set up so that your app updates on any change you make to the code.

This means you can focus on learning React!

Have a look at the official site: <https://create-react-app.dev/>.

One of our volunteers has also made a movie to explain this setup and what Babel is in the following video:

{% hyf-youtube src="https://www.youtube.com/watch?v=oCbipSIt43k" %}

## Vite

Vite is slightly a new tool written by Evan You, the person who developed Vue.js framework. This tool can be used for creating react apps with different temple such as using Typescript or JavaScript. Also, we can use it with other frameworks like Vue and svelte or even with vanilla JavaScript.
This tool introduces a big performance boost with easier setup comparing to an old technologies such as Create-react-app which relies on webpack. Those advantage shift the developers to use Vite over Create-react-app on most of the modern applications.
To create our React app with Vite we simply run the following command:
```
 npm create vite@latest
```
Then we choose the desire template, for example "react-ts" which create a react app with Typescript. You can find more about the setup on the official docs:
[Vite Getting Started](https://vitejs.dev/guide)
If you feel curious about this technology consider reading the official:
[Vite]([https://vitejs.dev/guide](https://vitejs.dev/guide/why.html))

## Static hosting

React in itself creates what is called a `build` which is all your code converted into JavaScript that the browser can understand. In essence this is a static amount of code that we can host. There are many static site hosting platforms that make it easy to deploy your React applications.

The host creates a URL for us that we can use to access our website.

Examples of `static site hosting` platforms are the following:

- [Netlify](https://www.netlify.com/)
- [Now](https://zeit.co/)

To learn more about `static site hosting` and how to do it, study the following:

- [A Step-by-Step Guide: Deploying A Static Site or Single-page App](https://www.netlify.com/blog/2016/10/27/a-step-by-step-guide-deploying-a-static-site-or-single-page-app/)
