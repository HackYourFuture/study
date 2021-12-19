# API Testing

Testing API's is similar to [ui testing](/testing/ui-tests.md). Where the ui tests are seen as the integration tests for your frontend, API tests are the integration tests for the backend.

When writing API tests, you can think of your API like a black box, where the internal workings of the code does not matter to you. You want to put yourself in the shoes of the user of your API and make sure that the end points of your API work as expected.

## Automating API tests

We don't want to have to constantly run through all of our endpoints to check everything works when we change our code. So with all tests we want to automate them if possible. There are two main ways this can be automated:

### Using postman

If you have built an API you have probably heard of Postman, it is a way to send requests to your API without needing to create a frontend. They have also integrated a way to set up automated tests!

{% hyf-youtube src="https://www.youtube.com/watch?v=VywxIQ2ZXw4" %}

### Using a JavaScript testing framework

As you are already writing unit tests for your API code (as you always write unit tests) an argument can be made to also put your API tests in the same framework. This keeps it all in the same place, which makes it easier to manage.

To do that, there needs to be a way to start your API and run code against it. As usual this can be done using vanilla JS by sending http requests, but luckily there are packages that abstract a lot of this away.

Have a look at the following video which shows how to use `jest` (the testing framework they chose) and `supertest` (the package that abstracts the http requesting for you):

{% hyf-youtube src="https://www.youtube.com/watch?v=FKnzS_icp20" %}

## Stress testing

Something unique to API's is that it needs to be tested on the amount of requests it can handle. What if a lot of users request data at the same time? What happens when an API gets a lot of users over a longer period of time? And what if there is a spike of users?

The terms used to answer these questions are called `Load` (dealing with an expected amount of users), `Stress` (what is the maximum amount of users), `Soak` (what happens after a long time) and `Spike` (how does the API handle a huge increase in users). To get more information, have a look at the [following article](https://zoonou.com/resources/blog/performance-testing-techniques/) by the people at zoonou.

Overall, with the introduction of cloud computing, this testing is handled by your cloud service provider, so it is out of the scope of this curriculum. But if you are wondering how to implement these tests, the following video gives a nice short introduction:

{% hyf-youtube src="https://www.youtube.com/watch?v=r-Jte8Y8zag" %}
