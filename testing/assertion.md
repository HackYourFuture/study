# Assertion

> "a declaration that something is the case"
>
> - [Merriam Webster](https://www.merriam-webster.com/dictionary/assertion)

Testing code is all about _describing_ how you _expect_ the code to behave. The most basic type of test is an _assertion_ about what you expect to be in memory at a certain line of your program. Let's explore this a simple snippet and see how logging is different than asserting (try studying each of these snippets in JS Tutor or the console):

1. Looking at this code, you already have a pretty good idea what is happening in memory. at each step we're assigning a different value to the same variable. Without adding anything into the code you can step through it in your head and be confident what is happening at each step.

   ```js
   let favoriteTree = 'birch';

   favoriteTree = 'oak';

   favoriteTree = 'palm';
   ```

2. _Logging_ the variable at each step will give you more confidence in your understanding of this code by showing you what value is _actually_ in memory at each step. But! Logging is only _describing_ the code. There is no prediction, you are not saying what you _expect_ to be in memory so if you are wrong nothing happens. Logging is not testing.

   ```js
   let favoriteTree = 'birch';
   console.log(favoriteTree);

   favoriteTree = 'oak';
   console.log(favoriteTree);

   favoriteTree = 'palm';
   console.log(favoriteTree);
   ```

3. _Asserting_ the variable's value at each step requires a _prediction_, this forces you to really understand your code! Remember that you need two key ingredients for an assertion: an _expected_ value, and an _actual_ value. If the prediction is true then the nothing happens, if the prediction is false then the assertion will fail.

   ```js
   let favoriteTree = 'birch';
   // actual: whatever is stored in favoriteTree on this line
   // expected: 'birch'
   const prediction1 = favoriteTree === 'birch';
   console.assert(prediction1);

   favoriteTree = 'oak';
   // actual: whatever is stored in favoriteTree on this line
   // expected: 'oak'
   const prediction2 = favoriteTree === 'oak';
   console.assert(prediction2);

   favoriteTree = 'palm';
   // actual: whatever is stored in favoriteTree on this line
   // expected: 'maple'
   const prediction3 = favoriteTree === 'maple';
   console.assert(prediction3);
   ```

You might have noticed two important things about the third code snippet:

- **It is longer and more complicated than the first two**: absolutely! Adding tests into your code also adds more code into your code, but it also adds confidence. If all the assertions pass you know your code does what is expected and you can trust it.
- **There is a mistake in the third prediction**: absolutely! Every programmer makes mistakes when writing code, and tests are still code. It's possible there's a bug in the tests and not your code! People use tests because in general they help more than they harm. When reading, running, or writing tests it's important to stay alert when something doesn't seem right.

---

## Asserting Functions

The example of asserting a single variable three times is not very realistic. In real projects and especially in HYF exercises you usually be testing functions using tests that someone else wrote for you. To test a function you do not write assertions inside your code, instead you write tests (ie. assertions) outside the function and will use them to make sure your function does what it is supposed to.

Here is a simple example using plain old JS:

```js
// the code in this example works correctly
//  take a minute to study it JS Tutor or the debugger

// checks if both values are a number
//  if either value is not a number, it rejects the value
//  else it returns the sum of both numbers
const add = (x, y) => {
  if (typeof x !== 'number') {
    return 'x is not a number';
  }
  if (typeof y !== 'number') {
    return 'y is not a number';
  }
  return x + y;
};

// it should add positive numbers
const _1_actual = add(3, 4);
const _1_expected = 7;
console.assert(_1_actual === _1_expected);

// it should add negative numbers
const _2_actual = add(-3, -4);
const _2_expected = -7;
console.assert(_2_actual === _2_expected);

// it should add mixed positive & negative numbers
const _3_actual = add(-1, 1);
const _3_expected = 0;
console.assert(_3_actual === _3_expected);

// it should reject x if x is not a number
const _4_actual = add('3', 4);
const _4_expected = 'x is not a number';
console.assert(_4_actual === _4_expected);

// it should reject y if y is not a number
const _5_actual = add(3, true);
const _5_expected = 'y is not a number';
console.assert(_5_actual === _5_expected);
```

---

## Assertion Libraries

As you move through your programming journey the code you write will become more complex, and so will the tests. Basic `console.assert` testing is ok for little exercises but you will want to use a professional _assertion library_ to test real projects. There are many assertion libraries out there and everyone has a favorite, but at their heart they're all do basically the same thing: they take in an actual value & an expected value, then check if they are the same.

You can read more about different assertion libraries in other sections of the Testing chapter.
