# Classes

A `class` is a **blueprint/template** of an entity and is the next step in the evolution from a [constructor function](./constructor-functions.md). When we define a class we give it properties and behaviors. For example, a Person class can have a `name`, `age` and `gender`; these are the properties of the Person. Additionally, a Person can also `talk`, `walk` `sleep`; these are the behaviors of the Person.

> Note that classes are often talked about in combination of object oriented programming. In this article we will not talk about object oriented programming as it is possible to use classes without following that pattern

Let's take an example of a class, written in ES6 syntax:

```js
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  talk(sentence) {
    console.log(sentence);
  }

  sleep() {
    console.log("Zzzzzzzzz....");
  }
}
```

When defined like above, it's merely a definition. It's not an `instance` of it. Or in other words: it's a new blueprint we've created, but not yet a real person.

To create a real Person, we have to `instantiate` it:

```js
const aisha = new Person("Aisha", 25, "Female");

aisha.talk("Hi! My name is Aisha!"); // Result: Hi! My name is Aisha!
```

## Classes vs constructor/factory functions

You may have read about constructor or factory functions before and are now questioning what the difference is. From an outside perspective it does look like it is very similar but there are some advantages to using a class over a constructor function.

### instanceof

The class will create an instance and therefore you can use the `instanceof` keyword to check if something is an instance of that specific class. Consider the following:

```js
/** CONSTRUCTOR FUNCTION **/
function PersonFunction(name, age) {
  return { name, age };
}
const fadi = PersonFunction("Fadi", 22);
console.log(fadi instanceof PersonFunction); // false

/** CLASSES **/
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const reema = new PersonClass("Reema", 25);
console.log(reema instanceof PersonClass); // true
```

### private vs public (encapsulation)

A good practice in programming is to ensure that not every part of your code has access to every other part of code. It helps avoid bugs, helps keep sensitive data safe and also keeps your code maintainable. When using classes this is called `encapsulation` and the most basic version is to set certain methods or values to private. The more advanced ways of encapsulation is out of the scope of this article.

So let's have a look at an example:

```js
class Person {
  #name;

  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  getName() {
    return this.#name;
  }
}
const reema = new Person("Reema", 25);
console.log(reema.name); // undefined
console.log(reema.#name); // error!
console.log(reema.getName()); // Reema
```

As you can see, we cannot get the name from the Person instance itself, which is why the class provides a so-called `getter` to get this information. In this example it is not very useful, but it does allow you to maintain the code better. Let's say later on you want to start dividing the name into a first name and last name field. If you allowed access to the fields then you would have to go through the whole code base, but if you nicely encapsulated the information you could imagine updating your class like this:

```js
class Person {
  #firstName;
  #lastName;

  constructor(name, age) {
    // This name algorithm is obviously way too simplistic for all the types of names that exist in the world :)
    const nameTokens = name.split(" ");
    this.#firstName = nameTokens[0];
    this.#lastName = nameTokens[1];
    this.age = age;
  }

  getFirstName() {
    return this.#firstName;
  }

  getName() {
    return `${this.#firstName} ${this.#lastName}`;
  }
}
const reema = new Person("Reema Smith", 25);
console.log(reema.getName()); // Reema Smith
```

Now all your other code can stay the same and a 2 day refactor job turned into 30 minutes of work. The power of good coding practices!
