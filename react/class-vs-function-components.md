# Class vs Function components
There are two ways of writing components in React, either using the class syntax or the function syntax. In older versions of React we needed the class syntax to be able to store state. Since version 16.8 of React this is not the case anymore with the introduction of Hooks.

The people behind React want to take the library into a different direction. Instead of using classes, they want to go to a world where React components are written using only functions, no classes. There a different reasons for why this the case, but the bottom line is that future React application **should be written with functions alone**.

Let's first have a look at the two different ways to build a similar simple component and then look at migrating between them. You will probably not understand everything right now, but keep this page in mind whenever you encounter class components.

## Class components
Class components are named like that because they use the class syntax from JavaScript. Every component would be an instance of this class and the state stored as instance variables inside that instance.

The React functions to update the DOM are all implemented in a `Component` class that your components needed to extend. You can then hook into the lifecycle methods by using specifically named functions.

An example of what a class component looks like is as follows:

```js
class Example extends React.Component {
  state = {
    exampleMessage: "This message is for the example",
  };

  render() {
    return <div>{this.state.exampleMessage}</div>;
  }
}
```

As this way of building components is not recommended anymore we will not go into more detail and it is not needed to fully understand what that piece of code does. If you are interested (or encounter a class component and need to figure out what it does) have a look at the following links. But we do not expect you to write these components during the course:

- [Official React documentation](https://reactjs.org/docs/react-component.html)
- [CodeYourFuture lesson](https://syllabus.codeyourfuture.io/react/class-components/lesson)

## Function components
Function components are named that way because they are basically functions that return JSX. This JSX then tells React what the DOM should look like so it can do its magic. The syntax for the same component as mentioned in the class section is as follows:

```js
const Example = () => {
    const [exampleMessage] = useState('This message is for the example');

    return <div>{exampleMessage}</div>;
}
```

The `useState` function is what we call a hook and since the introduction of these hooks it has made class components obsolete.

## Migration from class to function components
In a perfect world every piece of react code and tutorial you will encounter will already be migrated to function components. Unfortunately that is not the case, which means you will need some basic knowledge of class components and their syntax.

The best way to deal with this is to learn how to migrate a class component to a function component so it is written in a way that you are comfortable with. You should treat this as information you can learn once you encounter the problem. For your studies we will only teach you how to build function components.

The following video is a guide for someone converting a full application to function components:

{% hyf-youtube src="https://www.youtube.com/watch?v=-MlNBTSg_Ww" %}

The following links should help you when you encounter a class component and need to convert it:
- [Official migration docs](https://reactjs.org/docs/hooks-faq.html#from-classes-to-hooks)
- [Refactor to React Hooks, Not Classes](https://rangle.io/blog/refactor-to-react-hooks-not-classes/)
- [React Class Components are dead? (Hint: maybe)](https://itnext.io/react-class-components-are-dead-hint-not-yet-1d0a151173b8)
- [Migrating to react hooks](https://dev.to/subdeveloper/migrating-from-class-components-to-react-hooks-4lp3)

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [Introduction of hooks by the React team](https://reactjs.org/docs/hooks-intro.html)
