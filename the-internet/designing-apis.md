# Designing API's

In the general [API section](/the-internet/api.md) we looked at API's from the frontend, but let's go a little deeper into what an API is and more specifically: how to actually design one. Let's first start by going over what an API is and introduce a new analogy:

## Analogy
Application Programming Interface (API) in its simplest form is the part of an application that allows users to make use of its functionality. However, instead of a beautiful-looking user interface, it's usually some kind of URL (which in this context is often called an `endpoint`).

Whenever developers make some kind of software that they want others to use, they make sure it can be communicated with. That part is called the API. The developers usually also write instructions for how to best communicate with the API, this is called `API documentation`.

A useful analogy is that of a restaurant.

> As a _client_ when you go to the restaurant you are not allowed to go into the kitchen (server). However, you can talk to the waiter (API) who will pass on your request to the kitchen. The kitchen will use the things that it has such as ingredients, pans and pots, and the chef's talent to prepare your food. The waiter will bring you the food (response). Of course, to order anything you need to know what is available and thus you need a menu (documentation).

## RESTful API's
Building software is like building houses: architecture is everything. The design of each part is just as important as the utility of it. REST is a specific architectural style for web applications. It serves to organize code in **predictable** ways.

### What is REST?
REST stands for Representational State Transfer. This means that when a client request information about a resource, the server will _transfer_ to the client a _representation_ of the _state_ of the requested resource.

If this seems very abstract to you, don't worry, REST is only a concept, an idea of how applications should be organized.

The world of `REST` consists of two things: resources and operations (Creating, Reading, Updating, Deleting).

A `resource` can be any object, real or imaginary. On Instagram for example, a resource can be a user, a photo or a hashtag. REST offers a way to expose information about its resources. For example, for Instagram, the state of a user (the resource), contains the user's name, the number of posts that user has on Instagram, how many followers they have, and more. Resources have names e.g. _users_, _photos_ and _hashtags_ and each object in resource has an identifier. For example, a _user_ has a username.

REST also enables clients to take actions on those resources. We call these actions `CRUD` operations:

- Creating new resources, such as videos/images/text files, etc.
- Retrieving those files and reading them.
- Updating the content of those files.
- Deleting those files.

The most important features of REST are:

- An application has a `frontend` (client) and a `backend` (server). This is called [separation of concerns](https://medium.com/machine-words/separation-of-concerns-1d735b703a60): each section has its specific job to do. The frontend deals with presenting data in a user friendly way, the backend deals with all the logic and data manipulation
- The server is `stateless`, which means that it doesn't store any data about a client session. Simply put, when you refresh the page you won't keep the data you requested before (unless it's saved in the browser or in a file on the server). Whenever a client sends a request to the server, each request from the client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server. This makes it possible to handle requests from millions of users.
- Server responses can be temporarily stored on the client (a browser) using a process called `caching`: storing files like images or webpages in the browser to load the next time you enter a website (instead of getting them from the server, which generally takes longer to do).
- Client-server communication is done through `Hypertext Transfer Protocol`, which serves as the style (the how) of communication.

It's important to know about REST because it teaches us how web applications are designed and holds us to a standard that makes development and usage predictable. However, don't worry if you don't know what any of this means just yet. It's good to be exposed to it, and understanding will come with experience.

For more research, check the following resource:

- [What is REST: a simple explanation for beginners](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f)

### What is a RESTful API?
A RESTful API is nothing more than an API that follows the REST architectural pattern.

That means that the API exposes resources and allows clients to perform operations on those resources. When a client wants to request information on a resource it needs to say which resource it wants information on. This is passed as a Universal Resource Locator (URL) in the HTTP request. The client also needs to say what operation he is trying to perform. This is specified in the method of the HTTP request.

Let's look at a concrete example. Picture a REST API for a library with a domain at `library.edu/`. The resources would be `books`, so the URL for the books resource would be `library.edu/books`. If a client, e.g the librarian, wants to get information on the books he needs to use the `GET` HTTP method. The server will respond with a list of book information such as title, author etc.

Now imagine that the librarian wants to register/create a new book. He needs to specify the resource he wants to create using the same URL as before `library.edu/books` and use the `POST` method. The information about the book to be created such as title, author etc., is part of the request body.

Next, let's think about how the librarian would update the information for a specific book. The resource is still books and the method is `PUT`, but how do they tell the server which specific book to update? This is where the resource identifiers come in.
The library needs to maintain and provide identifiers for each object. The user uses this identifier in the URL e.g. `library.edu/books/TheWhiteCastle`. The identifier can be a number or text, it does not matter. The same url is also used to delete a book, just with the `DELETE` method.

To summarize, here are the available operations and the corresponding URLs.

| Operation                                    | URL                                | HTTP Method |
| -------------------------------------------- | ---------------------------------- | ----------- |
| Get all books                                | `library.edu/books`                | `GET`       |
| Create a new book                            | `library.edu/books`                | `POST`      |
| Update the information about a specific book | `library.edu/books/TheWhiteCastle` | `PUT`       |
| Delete a specific book                       | `library.edu/books/TheWhiteCastle` | `DELETE`    |

The URL in the example consists of a domain `library.edu` and a path `/books`. When writing APIs we are mostly concerned with the _path_. You might also hear the synonymous _endpoint_ or _route_. During this weeks homework you will implement this exact API and then you will learn how all the different things fit together.

For more information check out the following resources:

- [What is an API? In English, please](https://medium.freecodecamp.org/what-is-an-api-in-english-please-b880a3214a82)
- [Examples of REST APIs](https://nordicapis.com/5-examples-of-apis-we-use-in-our-everyday-lives/)


