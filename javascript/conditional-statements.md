# Conditional statements

Computers only function by logical rules: whether something is true or not determines if an instructions gets executed or not. This logical process is expressed in a `conditional statement` and goes like this: if _this is the case_, then _that happens_. Or in code:

```js
if (/* this is the case */) {
  // then this will happen
}
```

A condition is put in the `( )` and it needs to evaluate to `true` or `false` (also known as `Boolean` values). If the condition is true, then whatever is inside the `{ }` will be executed.

What happens when the condition is false? For that we have the `else { }` block. If the condition is false, then whatever is inside the else will be executed:

```js
if() {

} else {

}

```

The following video shows different ways of telling JavaScript to go in a different direction:

{% hyf-youtube src="https://www.youtube.com/watch?v=nBj2nJup8xU" %}

## Ternary operator

Sometimes the condition is very small and having the whole if/else structure would make the code more complex. If that is the case then you can make use of the ternary operator. Have a look at the following example:

```js
// If/else way
const age = 43;

if (age > 18) {
  console.log('Yes you may vote');
} else {
  console.log('You may not vote yet');
}

// Ternary way
console.log(age > 18 ? 'Yes you may vote' : 'You may not vote yet');
```

Whenever you are deciding which way to use, only think about the readability of the code. In terms of the compiler these things are exactly the same.

# Extra reading
If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [More about the Control flow](https://dev.to/mugas/control-flow-in-javascript-246l)
- [More about the ternary operator](https://www.javascripttutorial.net/javascript-ternary-operator/)