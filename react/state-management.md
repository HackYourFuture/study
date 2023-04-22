# State management
So far you've learned about `state` and the way to communicate that to other components (called `passing down props`). It's easy enough to do this if we have only a few components. But what happens if we have a 100 components, and we need to pass a piece of state from the top level to the bottom level component with multiple components in between? What if we have a very complex app and we lose track of all the different states our application is in?

This is when you get into the topic of State management. Choosing how to deal with complex states is where experienced React developers can shine. React gives you a lot of options to handle more complex applications which means there are a lot of possibilities. There is no one right way but each has their advantages. We will go through all of these possibilities in here and give some tips on what the advantages are for each. It is up to you to determine what will be the best way in your specific situation.

Let's start with some more articles on the importance of state structures:
- [Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure). Note that these principles are very similar to database principles! Your state is like your own database for your React application.
- [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
- [Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state)

It is also possible to use all of these things in different places in your application, so it is not a single choice to be made! Look at each case with a fresh mind.

## Reducers
When your app gets complex and you have a lot of state variables that are kind of interlinked it can be a good choice to rethink your state management from pure state to thinking from an action perspective. This is what `reducers` are there for. This way of thinking was originally created by the people behind the [Redux](https://redux.js.org/) library, but is now partially implemented in the base React framework itself. Redux offers even more functionality and once your app will be even more complex the jump may need to be made to the Redux library. We will look into the React implementation here and will leave Redux for now.

Have a look at the following article:
- [Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)

## Using a Context
Sometimes you may come to the conclusion that you need some state to be shared amongst components in multiple places. If that is the case it may be time to use a Context.

Have a look at the following article:
- [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)

> WATCH OUT: A common mistake beginners make is that they assume that just putting everything into one or multiple contexts all at the top of the application makes everything easier because you don't have to think about anything. This may be true initially, but this has the same fallacy as global variables. It will be easy to change and access the variables everywhere but as soon as you get an error with that global variable (or context state) it will be extremely difficult to figure out what is happening. So you will develop very fast but will struggle with errors in your application. So do NOT do this!

The following video goes through an implementation for you to get you familiar with how to implement this.:

{% hyf-youtube src="https://www.youtube.com/watch?v=35lXWvCuM8o" %}

The end result of this tutorial however does put a lot of the logic of adding and updating the movie in the AddMovie component. There is an argument to be made to put the adding of a movie and the updating of a movie functions in the Context so that all the state logic is in the same place. We leave this as an exercise for you!

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [Redux](https://redux.js.org/) is still being used a lot as it offers more than the base of React and such is a good thing to know about.
- [Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context)
