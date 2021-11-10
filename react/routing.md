# Routing in React

Routing traditionally happens on the server-side. Whenever a user goes to a certain endpoint, let's say it's `/about` a GET request will be send to the server. The server then responds with an HTML page.

In React, however, we're dealing with a Single Page Application. This means that we're never really sending a request to fetch another page from the server; all pages are already included in the initial render of the whole application.

This is what we call _client-side routing_ and it is mportant to note that client-side routing **simulates** a page change, but technically no actual page is being changed.

Go through the following to learn more about the difference between the standard server-side routing and this client-side routing:

- [Server Side Routing vs Client-Side Routing](https://www.codementor.io/chinemeremnwoga/server-side-routing-vs-client-side-routing-yne57eq9a)

## React-router

React itself doesn't offer a way to create client-side routing. That's because it's not necessary for a single page application to have. So we'll have to use a third party library. The defacto standard for routing in react is [React-Router](https://github.com/remix-run/react-router). The documentation linked in the extra reading for this library is very good and provides a lot of information. If you need to look up something, that should be the place to start.

Have a look at the following tutorial to learn how to use it:

{% hyf-youtube src="https://www.youtube.com/watch?v=0cSVuySEB0A" %}

### Protected routes

When building React applications, you'll definitely deal with `authentication`. Every login system of some kind applies this concept.

In terms of routing, this means that some parts of the app will be accessible only to logged in users. We call those areas _protected routes_.

The following video explains how this works:

{% hyf-youtube src="https://www.youtube.com/watch?v=kByiWTWdpww" %}

# Extra reading

If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [Official documentation](https://reactrouter.com/web/guides/quick-start)
- [v5 tutorial]({https://www.youtube.com/watch?v=Law7wfdg_ls)
