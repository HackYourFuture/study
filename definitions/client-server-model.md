# The client-server model

The `client-server model` is one of the most important concepts in web development. The easiest way to explain this concept is by using an analogy.

> Let's say you are hungry and feel like going to a restaurant. The moment you enter the restaurant you are a customer, or in IT terms a `client`. You take a seat and decide to order various things, each order representing a separate `request`: you are requesting an orange juice and requesting a nice, healthy salad. Your requests are heard by the waiter, or in IT terms the `server`. Their job is to listen to your requests and do whatever is necessary to provide you with what you want. The actual services, like cooking the food, making the drinks or doing the dishes are all done by others. However, to the client the end result of these services are all provided by the server. You don't want to know who performs what service, you just want to eat. When the server comes back with whatever you ordered, they provide you with a `response`. This happens whether or not they could fulfill your requests.

In a web application, the process is very similar. The browser, by way of the application user interface, is the `client`. Some computer that has the data and services you want is the `server`.

Let's say you log in to your online bank account:

As the client, you want to see the amount of money you currently have. The browser sends out a request to the server, who then activates the necessary services (in this example, some kind of database) and returns with a response containing the exact amount of money you currently have in the bank.

The video below also explains it well:

{% hyf-youtube src="https://www.youtube.com/watch?v=L5BlpPU_muY" %}

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [Client-Server Model & Structure of a Web Application](https://medium.freecodecamp.org/how-the-web-works-part-ii-client-server-model-the-structure-of-a-web-application-735b4b6d76e3)
- [Fundamentals of Web apps](https://fullstackopen.com/en/part0/fundamentals_of_web_apps)