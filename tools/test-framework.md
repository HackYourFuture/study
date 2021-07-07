# Test framework
When testing code, we want to separate the test code from the functional code as we don't want to push the test code to the user. This can be done manually, but generally once you start writing a project you will also add a test framework to it to handle all your testing needs. This includes:

- Automatically detecting test files and running them using one command
- Allowing you to run coverage which shows what lines of code are not run during the tests
- Allowing you to mock aspects of the system or code to isolate your code further

There are many different frameworks (`Jest`, `Mocha`, `Jasmine` for unit testing, `supertest` for API testing, `cypress` for UI testing), but overall their functionality is very similar, the syntax is a little different though so have a look at the official documentation of your framework to see the exact syntax you should be using.

Have a look at the following video on the Jest framework which gives a nice quick overview of what we are talking about.

{% hyf-youtube src="https://www.youtube.com/watch?v=FgnxcUQ5vho" %}

## Coverage

One major advantage of testing frameworks is that they are able to detect what code was run during your tests and what code was not. This will inform you which code paths were not touched during testing.

It is important to note that just because your code is run during your tests does not mean that it is tested well. Have a look at the following:

```js
/**
 * Determine if the first date is before the last date
 */
const isBefore = (firstDate, secondDate) => {
    if (firstDate.getTime() <= secondDate.getTime()) {
        return true;
    } else {
        return false;
    }
}
```

We could have the following tests for it (written in Jest syntax):

```js
describe('isBefore', () => {
    it('should return true if the first date is before the second date', () => {
        const firstDate = new Date('20200202');
        const secondDate = new Date('20211202');

        expect(isBefore(firstDate, secondDate)).toBe(true);
    });

    it('should return false if the first date is after the second date', () => {
        const firstDate = new Date('20200202');
        const secondDate = new Date('20211202');

        expect(isBefore(secondDate, firstDate)).toBe(false);
    });
});
```

This may look like it is completely tested and the coverage will be 100%, but it does not check the case when the date is the same. In our case it returns true, but it should return false.

There is a big discussion going on about coverage and what it means and what numbers to hit with your codebase. With more difficult code bases the amount of time spent trying to get to 100% may not be worth it. And then 100% does not necessarily mean that it is tested well.

Have a look at the following article that explains the situation very well:

- [Should you aim for 100% test coverage](https://blog.ndepend.com/aim-100-percent-test-coverage/)

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [Brad Traversy's guide to Unit testing frameworks](https://www.youtube.com/watch?v=7r4xVDI2vho)
- [Official Jest documentation](https://jestjs.io/)
- [Official Mocha documentation](https://mochajs.org/)
- [Official Jasmine documentation](https://jasmine.github.io/)
- [Official supertest documentation](https://github.com/visionmedia/supertest)
- [Official cypress documentation](https://docs.cypress.io/)