# Hooks provided by React

Hooks are predefined functions that the React library gives us that allow us to do some really cool things at certain parts in the React cycle. The easiest way to learn what hooks are is to look at some examples in detail.

## useState

You will probably already know about the `useState` hook as it is the basis of a lot of React and probably will be the hook you used the most. This allows our components to store data such that it is available for us to use. Have a look at this quick video that explains it beautifully:

{% hyf-youtube src="https://www.youtube.com/watch?v=O6P86uwfdR0" %}

## useRef

The `useRef` hook is a hook that can be useful in some very specific situations. The video below explains those situations very well:

{% hyf-youtube src="https://www.youtube.com/watch?v=t2ypzz6gJm0" %}

To recap, there are two main use cases for this hook:
- Whenever you need to store something that should *not* trigger a rerender
- Whenever you need access to an element in the dom

Have a look at the following articles:
- [Referencing Values with Refs](https://react.dev/learn/referencing-values-with-refs)
- [Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs)

## useEffect

The second most common hook is the `useEffect` hook. There are quite a few use cases for this hook as it provides some unique arguments. Have a look at the following video that explores a couple of use cases for the `useEffect` hook:

{% hyf-youtube src="https://www.youtube.com/watch?v=0ZJgIjIuY7U" %}

There are quite a variety of use cases that the hook helps us with:
- Running code only once (when your component gets mounted to the DOM)
- Fetching data when a prop or state changes
- Setting up and removing listeners (either on the DOM or to an API)

Have a look at the following articles that help explain this complex but very powerful hook:
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [A visual guide to useEffect](https://alexsidorenko.com/blog/useeffect/)

A common mistake beginners make is to overuse the `useEffect` hook. As the React documentation says: 

> Don’t rush to add Effects to your components. Keep in mind that Effects are typically used to “step out” of your React code and synchronize with some external system. This includes browser APIs, third-party widgets, network, and so on. If your Effect only adjusts some state based on other state, you might not need an Effect.

Already have a look at the advanced article on this to get it in the back of your head. If at any point in the future you see yourself using many useEffect hooks, then reread the article and see if you are making this mistake:
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

### Optional: Going deeper
The React docs also have some even more advanced topics on effects for other specific cases. These are for the time where you feel comfortable with using the `useEffect` hook. That is different for everyone, so bookmark these and have a look at them once you feel ready for it! You will only need this in advanced React applications.
- [Lifecycle of Reactive Effects](https://react.dev/learn/lifecycle-of-reactive-effects)
- [Separating Events from Effects](https://react.dev/learn/separating-events-from-effects)
- [Removing Effect Dependencies](https://react.dev/learn/removing-effect-dependencies)

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [Evolution of React: Why React Hooks](https://www.youtube.com/watch?v=eX_L39UvZes)
