# Controlled vs Uncontrolled

Forms have always been slightly different than any other element in HTML. As React provides a layer on top of HTML this is also the case for React. And it is the perfect example to explain the difference between controlled and uncontrolled components.

Let's look at the simplest example, a text input in a form:

```
<input type="text" name="name">
```

In the case of our input on the page the input has its own state and will update for the user. If we would make a component for an input it would look something like this:

```js
const Input = () => {
    return <input type="text" name="name" />
}
```

## Uncontrolled component
The component in the above example is what we call an uncontrolled component. It has its own state that is stored in the DOM. We could technically access it by looking at the DOM as follows:

```js
const Input = () => {
    const inputRef = useRef();
    
    return <input ref={inputRef} type="text" name="name" />;
}
```

We could then look at the `inputRef` and grab the value whenever we need to do something. This is however not recommended as it means the 'source of truth' of what the value is is kept in the DOM and not in your React state.

Most of the time you want to use a controlled component.

## Controlled component
A controlled component is named as such because its state is controlled by something else. Let's look at our example again:

```js
const Input = () => {
  const [name, setName] = useState('');

  return (
    <input
      type="text"
      name="name"
      value={name}
      onChange={(event) => {
        setName(event.target.value);
      }}
    />
  );
};
```

Now we have defined the `value` property of the input which is what the DOM uses as its state. The DOM therefore is back to its role which is to display the application to the user and React knows the state of everything.

## Closing thoughts
For forms, the general rule is to define the state in React and specifically set the value of any input (be it a text input, a textarea or a select element) in your components.

But this can also be taken with your components themselves. Avoid duplicating state at all costs. If you find yourself in a situation where your component has some state that a parent component needs access to, do *not* also track that state in the parent component. Consider making your component a controlled component and storing the state there We call that rule the _'Single source of truth'_ rule and it applies everywhere in coding.

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

Note that the below sources use class component syntax. We do not use that anymore, but the discussion of the React team is very good surrounding it:
- [Official docs](https://reactjs.org/docs/forms.html)