# The `this` keyword

In everyday communication, we use words like "this" or "that" whenever we want to refer to things in the world or something someone said. It's similarly used in JavaScript, only instead of real-world things we refer to objects.

In JavaScript `this` refers to any object it's defined in. The global object, `window` is the default value of `this`. So if you go to your console right now and type `this`, you'll get back a reference to the `window` object. The same thing would happen if you to log `this` inside of your JavaScript file:

```js
console.log("what is", this);
```

However, this isn't the only value `this` can have. The moment we create a new object, we create a new `this` keyword that refers to only that object.

```js
const wouter = {
  firstName: "Wouter",
  lastName: "Kleijn",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
```

In this example `this` refers to the complete `wouter` object. If we execute `wouter.getFullName()`, we get back the value of `wouter.firstName` and `wouter.lastName`.

```js
wouter.getFullName(); // Result: Wouter Kleijn
```

As you can imagine, this means that there can be multiple `this` keywords at play: the global `this` keyword (which refers to the `window` object) and a `this` keyword for every object that is created within the application.

Have a look at the following video that goes through this step by step:

{% hyf-youtube src="https://www.youtube.com/watch?v=gvicrj31JOM" %}

# Extra reading

If you just can't get enough, here are some extra links that mentors/students have found useful concerning this topic:

- [What is THIS in JavaScript? in 100 seconds](https://www.youtube.com/watch?v=YOlr79NaAtQ)
- [Understanding "this" in JavaScript](https://www.codementor.io/dariogarciamoya/understanding--this--in-javascript-du1084lyn)
