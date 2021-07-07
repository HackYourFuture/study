# UI tests

User Interface tests, sometimes refered to as integration tests or end-to-end tests, test the functionality of the application. Where unit tests take a very specific function and make sure that it works as expected, UI tests take a part of the application and test the workings of it. Something you as a student have been doing with your applications all the time. Have a look at the following video that takes an abstract approach to UI testing:

{% hyf-youtube src="https://www.youtube.com/watch?v=1R3vsu_7n0E" %}

Important parts to note are the `state` of the widget tree and the `interaction` with the widget tree. In web development our UI is always what is being displayed in the browser, which means we can think of the DOM as the widget tree of our application.

## Automating UI tests
As always, we want to automate as many tests as possible so that we can easily find problems when adding new features or refactoring our code. The way automated UI tests work is quite similar to unit tests in that we start with a certain situation, we call our code and then check that the situation changed in the way we want it to.

Let's look at an example using vanilla JavaScript:

```js
const testSubmitButtonIsOnlyEnabledIfEmailIsEntered = () => {
    const submitButton = document.getElementById('submit-button');
    const emailInput = document.getElementById('email-input');

    // Check that the submit button and email input are on the screen
    console.assert(submitButton != null);
    console.assert(emailInput != null);

    // Check that initially the email input is empty
    console.assert(emailInput.value == null || emailInput.value === '');

    // Check that the submit button is disabled
    console.assert(submitButton.disabled === true);

    // Enter a value for the email
    emailInput.value = 'some@email.com';

    // Check that the submit button is now enabled
    console.assert(submitButton.disabled === false);
});
```

We could run this function after loading our application and it will check that the elements we expect are there and with our initial values as expected, then make our ui change and lastly checks that the ui change made the right alterations to the DOM. Very cool!

It is possible to do this testing with vanilla JavaScript, but almost everyone uses a testing framework for UI tests. Have a look at the test frameworks article to see all of the benefits of using a framework and which ones are used for UI testing.

## Writing testable UI's
In the past the developer who built the application would write the UI tests as well, but it is becoming more common to have a QA engineer in the team that focuses solely on testing. This QA engineer will then write the UI tests to ensure the requirements of the application are being met, where the developer builds the application and writes the tests focused on the workings of the code.

In any case the developer needs to build what is called a testable UI. Generally this means a UI where the important widgets in the DOM are findable for the UI testing framework. In our example above we wrote `document.getElementById('submit-button')` to find our Submit button. This can work, but it is generally a better practice to use a `data-testid` property for testing. This makes it clear to every developer and every QA engineer that this is for testing purposes.

So whenever you are working on a project that requires UI testing, do not forget to add `data-testid` properties to the elements in your user interface that the tester will need!

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [UI testing: a comprehensive guide](https://www.perfecto.io/blog/ui-testing-comprehensive-guide)