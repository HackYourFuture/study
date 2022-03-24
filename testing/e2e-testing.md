# E2E testing

End-to-end testing (e2e testing) is a testing approach that tests an application from start to end. The goal is to test using a system that is as close to the real world as much as possible. Where other forms of testing is usually focused on testing separate components in isolated environments, e2e testing is about testing that all components including external services work together as expected.

In the case of web applications, that means that our e2e testing will actually run your tests in a browser and mimic the typing/clicking of a user instead of integrating with your code. It will also do the assertions based on what the resulting html code is in the browser rather than anything specific about your code. That way it is completely separate from your code meaning that as long as the end result is the same you can easily refactor your code. Have a look at the following video which goes over e2e testing:

{% hyf-youtube src="https://www.youtube.com/watch?v=68xvfrxlEYo" %}

## Tools

The video above already mentioned a couple of these terms, but when talking about e2e testing you will probably hear the following tools being used:

- _Selenium._ Selenium is the grandfather of e2e tools and was the first to make it possible to control your browser with your own code. A lot of other tools have been based on the Selenium framework in the past, but it has fallen off these days with the rise of more modern frameworks.
- _Cypress._ Cypress is currently the most popular e2e tool because of its simplicity as well as it being designed with JavaScript developers in mind. This makes it easy to learn while it remains quite powerful.
- _Playwright._ Playwright is the newest framework and it is a little more powerful and customisable than Cypress. This also adds a little more complexity and variation which makes it harder to learn for complete e2e testing beginners.

As such we suggest that when starting to learn e2e testing you start with cypress. The documentation does a good job of introducing you to what it can do so have a look through it over [here](https://docs.cypress.io/guides/overview/why-cypress).

# Extra reading

If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [The official playwright site](https://playwright.dev/)
