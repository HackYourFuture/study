# Hooks provided by React

Hooks are predefined functions that the React library gives us that allow us to do some really cool things at certain parts in the React cycle. The easiest way to learn what hooks are is to look at some examples:

## useState

The most common hook that you will use is the `useState` hook. This allows our components to store data such that it is available for us to use. Have a look at this quick video that explains it beautifully:

{% hyf-youtube src="https://www.youtube.com/watch?v=O6P86uwfdR0" %}

Have a look at the official documentation on the `useState` hook [here](https://reactjs.org/docs/hooks-state.html) to go into a little more detail. This explanation assumes you know the class component way of working, you can ignore those parts (the classes example and anything with the `this` keyword in it).

## useEffect

The second most common hook is the `useEffect` hook. There are quite a few use cases for this hook as it provides some unique arguments. Have a look at the following video that explores a couple of use cases for the `useEffect` hook:

{% hyf-youtube src="https://www.youtube.com/watch?v=0ZJgIjIuY7U" %}

There are quite a variety of use cases that the hook helps us with:
- Running code only once (when your component gets mounted to the DOM)
- Fetching data when a prop or state changes
- Setting up and removing listeners (either on the DOM or to an API)

Have a look at the official documentation [here](https://reactjs.org/docs/hooks-effect.html) to go into more detail.

## useRef

The `useRef` hook is a hook that can be useful in some specific situations. The video below explains those situations very well:

{% hyf-youtube src="https://www.youtube.com/watch?v=t2ypzz6gJm0" %}

To recap, there are two main use cases for this hook:
- Whenever you need to store something that should *not* trigger a rerender
- Whenever you need access to an element in the dom

## useMemo

The `useMemo` hook is a way to battle some performance issues that you may encounter in bigger applications. The video below explains it perfectly again:

{% hyf-youtube src="https://www.youtube.com/watch?v=THL1OPn72vo" %}

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [Evolution of React: Why React Hooks](https://www.youtube.com/watch?v=eX_L39UvZes)