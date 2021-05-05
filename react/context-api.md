# Context API
The context API is all about state management which is a complex topic that divides the good developers from the bad ones.

## State management
So far you've learned about `state` and the way to communicate that to other components. This is called `passing down props`. It's easy enough to do this if we have only a few components. But what happens if we have a 100 components, and we need to pass a piece of state from the top level to the most bottom component?

This would be very time-consuming and unpractical. That's where the idea of a state management system comes from.

Instead of having state passed down to each component separately, we put state in one central place called a `context`. Then we connect the `context` directly to any component that needs access to state.

The following articles explain the concept very well:

- [Context](https://reactjs.org/docs/context.html)
- [React Context](https://www.robinwieruch.de/react-context)

## How to implement a Context
Have a look at the following video which explains it very well.

{% hyf-youtube src="https://www.youtube.com/watch?v=35lXWvCuM8o" %}

The end result of this tutorial however does put a lot of the logic of adding and updating the movie in the AddMovie component. There is an argument to be made to put the adding of a movie and the updating of a movie functions in the Context so that all the state logic is in the same place. We leave this as an exercise for you!

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- If you've ever come across a tool called [Redux](https://redux.js.org/). This is where the term Reducer comes from and was created before the Context API was introduced. There are still some differences between the two, so redux still has its use.