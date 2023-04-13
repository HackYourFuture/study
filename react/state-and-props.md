# State & Props

What makes React `dynamic` is the concept of `state`. Simply put, state is the data that is persisted in your components. It changes based on the input from the user. Let's say a user logs into their Facebook account. In React terms this is what will happen: A user types in their account details into the login form. This data will be placed into the application state, in real-time.

This means: The other parts of the application know immediately about the content you've just written! So if we want to use those exact same details to show in the next screen, we can do so without having to send a request to the server. All of this user-specific data stays inside the client.

The other side of `state` is the how we pass it down to our other components. When this happens we call it `props`. It's short for `property`, similar to the properties in HTML elements.

`props` are passed down using a self-defined property name. Take a look at the following example:

```js
const Parent = () => {
  return <Child thisIsaProp={randomPropName} />;
};
```

The `thisIsaProp` name is something I've created myself, it has no special meaning whatsoever. However, while that is the case it's still important to make any name you give it semantic: it should be meaningful and indicate its purpose. For example:

```js
const Parent = () => {
  return <Child user={userDetails} />;
};
```

In the above example, the `prop` has a name that describes its contents. From it we can infer that it's probably a user object, with user-specific information.

Let's have a look at Props and State in more detail in isolation.

## Props
Props are ways that we can pass data down to our other components. They are very similar to arguments in functions - you can "pass" props to components, and you can use those props within a component. 

```js
<User name={'Eyad'} />
```

As you can see props are key-value pairs, in this example the key is `name` and the value is the string 'Eyad'. We can pass as many props as we like to a component. It also does not always have to be a string, you can pass down objects, arrays, numbers and even functions. In JSX you can write any valid JavaScript code into the curly braces `{}`.

When receiving props, we get everything as one big object. So our `User` component from the example above would be implemented as follows:

```js
const User = (props) => {
    return <span>{props.name}</span>;
}
```

It is a common practice to use destructuring on the props argument. So we would really want to write it like this:

```js
const User = ({ name }) => {
    return <span>{name}</span>;
}
```

There are two things to remember about props:
1. Treat it as an argument to a function, so never mutate a prop.
2. Props can only be sent down to child components, never upwards! This is called the Unidirectional dataflow

Learn a bit more about props with some interactive examples in the React documentation here:
- [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)

A common use case for props is to have it alter how the component needs to be rendered. Go through this article to see an example:
- [Conditional rendering](https://react.dev/learn/conditional-rendering)

## State
State is a general concept in software engineering. It is used when a part of your app needs to "remember" something that changes over time. To see this in action we should first learn how a React component can interact with the user. This is very similar to how vanilla JS works, have a look at the following article to see how it works:

- [Responding to Events](https://react.dev/learn/responding-to-events)

Now that we know how we can actually change something in our application, let's look at how that interacts with state:

- [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)

An important thing to remember when working with state is that only (_almost, but other things are very advanced and for now you can ignore_) by changing the state does React rerender your application. So see state as the model of your application and when it changes it means the UI needs to be updated. This is the backbone of React so let's look into this now already even though it will be too much. You will probably have to come back to this part in the future to really have it settle in.

- [Render and Commit](https://react.dev/learn/render-and-commit)
- [State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)

### Unidirectional dataflow

As we've learned in previous sections, in React data flows from component to component. However, this goes in an organized, tree-like manner. Take a look at the following diagram:

![Component Hierarchy](./assets/componenthierarchy.png)

This is how we should think about creating our components: just like with the DOM tree we want to write components in a component tree. Here's how it could look in code:

```js
const App = () => {
  return (
    <Contacts>
      // The Contacts component has 3 children: 
      // AddContact, ContactList and SearchBar
      <AddContact>
        // This component has 1 child: AddContactForm
        <AddContactForm />
      </AddContact>
      <ContactList>
        // This component has 1 child: ContactCard
        <ContactCard />
      </ContactList>
      // This component has no children, so is therefore self-closing
      <SearchBar />
    </Contacts>
  );
}
```

As you've learned previously, we use `props` to pass our `state` to our different components. But this doesn't just happen randomly; we do in from top to bottom, or in other words in a `unidirectional flow`. What does this mean? It means that `props` can only be passed **down** the component tree, but never up.

In our example, it means that our `props` can only move from `<Contact>` > `<AddContact>`

- [Unidirectional Data Flow in React](https://flaviocopes.com/react-unidirectional-data-flow/)
