# API calls in React

Like mentioned before, React is "just JavaScript". The only things that make it React are the addition of `JSX`, `componentization` and `hooks`. The rest, like making API calls, happens as usual: at any moment you want to do some `data fetching` you can use a `fetch` to do the call. Look at the following example:

```js
import React from 'react';

const getUsers = fetch('').then(response => response.json());

const Example () => {

}
```

This is valid JavaScript. But it is outside of the scope of the React component! If you want to make sure the whole component hierarchy knows about the data fetching (and the state changes because of it), you have to make the call in a specific location: in a lifecycle hook. More specifically, you have to call it in the `useEffect()` hook!

Have a look at the following video to see how to do it:

{% hyf-youtube src="https://www.youtube.com/watch?v=hech0gCY0sg" %}

It is that easy, thanks to modern JavaScript!