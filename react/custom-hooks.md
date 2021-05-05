# Custom hooks

One of the main benefits of using the React hooks (like `useState`, `useEffect`, etc.), is that they can be used in any functional component.

However, that's not the only big benefit. Another one is that it allows us to isolate `stateful logic` into a reusable function that can be used in other functional components.

This `stateful logic` is just a complicated way for saying state variables and the instructions that manipulate it.

In a custom hook we can create state everytime we use it, and modify it according to the instructions that are included in the hook. This is the strength of using custom hooks: by defining custom hooks we can replicate a certain functionality for us to use in multiple different functional components.

In terms of implementation, a custom Hook is simply a JavaScript function whose name starts with ”use” (for example, `useSomeAction`). It incorporates existing hooks (like `useState`) and adds logic to it.

Study the following to learn more about it:

- [Building your own hooks](https://reactjs.org/docs/hooks-custom.html)
- [Building Custom React Hooks](https://medium.com/prototyped/building-custom-react-hooks-f6aad8567825)

## useFetch as an example
For example, if your app does a lot of fetching, you may want to introduce a custom hook as follows:

{% hyf-youtube src="https://www.youtube.com/watch?v=k0WnY0Hqe5c" %}

That means all this loading and handling of state is done by your hook. Do note that this tutorial as usual has only looked at the happy path, so see it as an exercise to also add an error state so your application knows if the API returned an error.

## Using other people's custom hooks

Like anything in development, once someone has found a solution to a common problem it (hopefully) gets published for everyone to use. This is also the case with `hooks`.

Check the following resources out to learn more about these custom hooks others have made for you to use:

- [usehooks.com](https://usehooks.com/)
