# Consuming API's

The role of a web server is to serve the user what they want: for example, your user account information, video/images or any other type of data.

Sometimes, in order to get the user what they want the server has to talk to other servers. The way servers talk to each other is no different than how your browser talks to a server. It uses the same HTTP protocol and very often REST and JSON as well.

In a way using APIs serves a similar purpose as using a package from NPM. It allows us to reuse code that someone else has written. In the case of API we do not directly get the code, but we use the functionality that the code provides.

For example, we could use APIs to [authenticate users](https://developers.facebook.com/docs/facebook-login/), [check addresses and locations](https://locationiq.com/#demo), [send emails](https://sendgrid.com/docs/for-developers/sending-email/api-getting-started/) and much more.

As you can see from the examples it would be really difficult to build such services ourselves. Just imagine the security and legal issues involved in building a [payment processing system](https://stripe.com/docs/api)!

### How to consume an external API?

How to consume an external API. First of all, let's define the terms here.

By `consume` we refer to the act of using the service an API provides, to be used in our own application. This service will be in the form of some kind of data transfer.

For example, let's say we want to get data from the [RandomUser API](https://randomuser.me/api/).

The service the API offers is the provision of random user data, organized in JSON, for us to use freely.

The process of making an API call to that URL and then using that data to display something in our application is the `consumation` of that API.

Now, how do we go about doing this? Take the [RandomUser API](https://randomuser.me/api/) and follow this basic guide to get started quickly:

1. **Read the documentation**. It's important to first know how the API works (what are the endpoints, what kind of data does it deliver, etc.). Every decent API has some sort of online documentation. The format and location is not standard. Look for a "docs"/"documentation" link. Pay special attention to authentication, versioning and how data is passed (query string or body).
2. **Try out the most basic example** you can find in isolation. This usually means trying out the provided example, which the documentation provides. Remember to use Postman to test it out!
3. **Build up a library of Postman requests** for the API calls that you plan to use, they will be invaluable in debugging later.
4. **Start implementing the API** calls in your application. You would usually do this within a route inside of your backend application, or in the frontend after an event has happened.

Have a look at the following video to see how you can make API calls from node.js:

{% hyf-youtube src="https://www.youtube.com/watch?v=ZtLVbJk7KcM" %}

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [What Is an API and Why Should I Use One?](https://medium.com/@TebbaVonMathenstien/what-is-an-api-and-why-should-i-use-one-863c3365726b)
