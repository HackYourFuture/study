# React testing

The logical testing framework for React is [jest](https://jestjs.io/) as it is also made by facebook. It is even included in the standard setup created by the `create-react-app` command. You may also notice that there are some `@testing-library` packages included by default as well. This is part of the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) that has become the officially recommended testing library for React.

## Paradigms

There are two main ways of testing React components that have a different outlook on the way to test. The automatically included `testing-library` package uses a user-centric testing approach, where the idea is to write the tests as close to what the user will do as possible. The `enzyme` package is more of a unit-testing approach where it treats the component as a function and expects certain changes if state changes.

Both have their advantages, although there seems to be a shift towards the user-centric approach more and more. Let's have a look at each in detail.

### Testing-library

Have a look at the documentation of the testing library for React as they explain it way better than we can. Make sure you have read the following links. Don't worry about trying to remember all of the different ways of selecting elements, that will come with experience (plus, that's what the [cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet) is for):

- [Introduction](https://testing-library.com/docs/react-testing-library/intro/)
- [Example](https://testing-library.com/docs/react-testing-library/example-intro)
- [Tutorial](https://www.robinwieruch.de/react-testing-library)

The main paradigm to focus on with using the testing-library is that you are testing what the user will do rather than testing your component. So when designing your tests, try to think from the user perspective of actions they will do rather than of your component. This means that you will probably not write tests for each of your components, but rather for each user interaction!

Watch out though that you keep the interaction per test as simple as possible. The general rule is to have 1 or 2 user actions (pressing a button, typing something, etc) and then do your verification. Anything more is usually part of the `end-to-end testing` where the whole application is run (including the backend) and a library like [cypress](https://www.cypress.io/) or [playwright](https://playwright.dev/) is used to control the browser.

The following tutorials come recommended, but they cover a lot of the same things. So find the one that works for you and have a look:

- [Laith Harb - Crash course using TDD](https://www.youtube.com/watch?v=GLSSRtnNY0g)
- [The Net Ninja testing-library tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ)
- [PedroTech's guide to testing-library](https://www.youtube.com/watch?v=Vp_76zdHkV8)

### Enzyme

Before `testing-library` was introduced, testing was mostly done using a library called [Enzyme](https://enzymejs.github.io/enzyme/). This is a package developed by AirBnb to allow you to do verifications on your components. For example, you can check the current state, the props that a component received, or alter some state and then check what the component does.

Sometimes this very specific way of testing makes testing a specific function of a component easier to do. That is why you will generally see both the `testing-library` and `enzyme` set up for bigger React applications.

The following tutorials come recommended, but they cover a lot of the same things. When looking for your own, watch out that a lot of the older tutorials use class components! Find the one that works for you and have a look:

- [Bitfumes - TDD with enzyme](https://www.youtube.com/watch?v=-bmdf1oATQo)
- [Duomly - Quick guide](https://www.youtube.com/watch?v=XNzVMP7Mnxg)
- [Beginner enzyme course](https://www.youtube.com/watch?v=REfRxzmWDLs)

## The hard parts

When testing small and isolated components like the ones in the tutorials it all looks very easy. It gets complicated, however, when your application gets more complicated. Think about your components that fetch data from an API, or that sets something in the local storage, or that has to do something after a certain amount of time! How do you test these things?

For the hard parts, there are a couple of things that `jest` provides to either `mock` something or to `` on something. Let's have a look at those in detail.

### Mocking

Mocking is a way for you as the tester to abstract that something your component uses. The term `mocking` means that instead of actually calling a particular function, we replace that function with one of our own. This allows us to specifically determine what will happen in the function!

If you are unsure about what mocking means, have a look at the following video's that go over the basics of mocking.

{% hyf-youtube src="https://www.youtube.com/watch?v=3PjdxjWK0F0" %}

{% hyf-youtube src="https://www.youtube.com/watch?v=ZbModC5pqv0" %}

One of the main examples of this is calling your backend, or an API from your React code. Your app is built around this information, but you don't want to set up the backend/call the api every time you run a test. You also want to control what comes back as well, how else are you going to test your app when the API returns an error? Have a look at the following video that uses a library to mock these kinds of things:

{% hyf-youtube src="https://www.youtube.com/watch?v=v77fjkKQTH0" %}

There are other places where mocking can be used. If you find that you want to ignore something, or want to force a specific result then think about mocking!

### Working with time

Let's say you have a toast in your application that should only show for a couple of seconds and then disappear automatically. For situations like this, jest actually has a way to artificially move time forward. Have a look at the [official documentation](https://jestjs.io/docs/timer-mocks) for a nice basic example.

The creator of `react-testing-library` Kent C. Dodds has a youtube channel where he handles questions from people. In a section of one of his videos he shows how to test a hook that does a self destruct just like a toast would need. Watch the video below, which is the whole session, until about minute 19:00. As it is a live coding session aimed at higher level developers he does go over some things that will probably be foreign to you.

{% hyf-youtube src="https://www.youtube.com/watch?v=PKUDcLGn-80" %}

The important thing to note is that, although it may seem logical, you do not want to add a `setTimeout` to `sleep` your tests for an amount of time. The reason being that your test suite will get big and creating a lot of tests that actually take a second or more will slow it down a lot and create weird bugs.

Since that video, the function `waitForElementToBeRemoved` is now also part of the [react-testing-library](https://testing-library.com/docs/dom-testing-library/api-async/#waitforelementtoberemoved) which can be used to solve this specific situation in a cleaner way for you. It is, however, still good to know how to do it both ways as there will be other situations where you need to simulate time passing!

## Testing custom hooks

With the introduction of hooks it has also become easier to test certain pieces of logic. Where previously this logic was tucked away inside of a component we can now separate it nicely! Separated code makes testing so easy, another reason to take the time to do it as much as possible!

Have a look at the following short video and it will show you exactly how you can isolate your custom hook for testing purposes:

{% hyf-youtube src="https://www.youtube.com/watch?v=qRw3qKRBW4M" %}

# Extra reading

If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [Self Teach Me - From building a component to testing it](https://www.youtube.com/playlist?list=PLrz61zkUHJJGoQcWPykdt4PaoQUD-SMkm)
- [Enzyme vs React testing library](https://www.youtube.com/watch?v=SyAYO5w-nUI)
- [React official testing docs](https://reactjs.org/docs/testing.html). Although it gives good information, it is focused on how the testing environment is set up and why. The `create-react-app` command and your employer will have this all set up for you so practically this is extra information. Have a look through if you find this interesting, however!
- [jest mocking documentation](https://jestjs.io/docs/mock-functions)
-
