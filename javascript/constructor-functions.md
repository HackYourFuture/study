# Constructor functions (new keyword)

In JavaScript, objects are special. In your programming so far you most likely have created objects like this:

```js
const anObj = {
  name: "Cool Object",
};
```

This is called an `object literal`, and it's a valid way of creating an object. However, writing it like this "abstracts away" a lot of what's happening behind the scenes.

> To abstract away refers to intentionally hiding the details of how something complex works in order to simplify things conceptually. For example, the remote to your television is a complex device, but all of this is abstracted away so you don't have to deal with it. You just press the ON button and it works.

You can write the same thing by using the Object `constructor function`.

```js
const anObj = new Object();
anObj.name = "Cool Object";
```

Well, what is a constructor function? To understand that we need to start at the beginning first: `factory functions`.

## Factory functions

If we want to create an object we can just use an `object literal` and we're done. But what if we want to create hundreds of copies (or as we say in programming, `instances`) of that same object?

For that we use `factory functions`. Don't let the name mislead you though, a factory function is just a regular function. However, the single differentiating factor is that it always returns an object instance: it is a factory that produces object instances, hence the name `factory function`. Here's an example:

```js
// Defining a blueprint for a person:
function createPerson(name, age) {
  const obj = {
    name: name,
    age: age,
    walk: function () {
      console.log(`${this.name} is walking!`);
    },
  };
  // other code to manipulate our object in some way here
  return obj;
}
```

This is the most simple way of defining a `template`/`blueprint`/`class` (these are all synonyms in this context) and creating object instances from it. Now every time we call this function we're creating a new person object.

```js
const wouter = createPerson("Wouter", 37);
const federico = createPerson("Federico", 36);
```

## Constructor functions

`Constructor functions` are ordinary functions that have a special purpose: to create object instances. You can consider them the more advanced version of `factory functions`.

Here's an example:

```js
// // Defining a blueprint for a person:
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

The difference with a factory function is the way to instantiate it. Instead of just calling it we have to use the keyword `new`, like so:

```js
const wouter = new Person("Wouter", 37);
```

You may have seen this `new` keyword before when working with dates in JavaScript and now you know why you have to do that (although technically Date is a class, but that is out of the scope of this article)! Let's go a little deeper into what `new` actually does in this video (turn on the captions if you find the accent hard to follow):

{% hyf-youtube src="https://www.youtube.com/watch?v=dq7FDSCHQsM" %}

# Extra reading

If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [Using the new Keyword in JavaScript](https://www.youtube.com/watch?v=I2CdrKlPdAY)
