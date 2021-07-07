# Unit tests

Asserting things in your code is one way of making sure that something unexpected is caught, but that does not allow the developer to really test their application. Enter unit tests!

Unit tests are tests written specifically to test the smallest pieces (or units) of our code. Usually testing just one function to ensure that it does what it is supposed to. This may seem over the top, but have a look at the following video that explains why we do this:

{% hyf-youtube src="https://www.youtube.com/watch?v=Eu35xM76kKY" %}

And then let's look at the simplest way of doing this using the same examples by having a look at:

{% hyf-youtube src="https://www.youtube.com/watch?v=XsFQEUP1MxI" %}

Test driven development as the video says is a tool that can be used to ensure you write tests and can even help you break down a problem into multiple parts. Some developers follow this religiously whereas others go for a make it work first approach. This is something you as a developer will have to figure out for yourself, as long as the end result is that the tests are written and they test everything.

## Edge cases
In the video all tests are for the happy path, but have a look at the following article that helps you with a checklist of all the cases to test:

- [Error handling and edge cases](https://www.freecodecamp.org/news/a-beginners-guide-to-testing-implement-these-quick-checks-to-test-your-code-d50027ad5eed/)

By checking all error and edge cases as well you can be sure that any refactoring you do does not break anything, which means your code will stay clean!