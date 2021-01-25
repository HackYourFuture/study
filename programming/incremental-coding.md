# Incremental coding

Clean code doesn't happen because of genius insight or magical thinking. Clean code happens when you develop your projects carefully and incrementally. Writing full programs without testing them or stopping along the way will lead to messy code that you and your colleagues will need to spend extra time fixing. You will write better code (and learn more from your projects!) if you work in small steps, producing working code with each step.

Incremental coding is important for full projects, but can be easier to learn with small coding challenges. A nice way to think about solving small challenges in steps is the Test Driven Development mantra _"red, green, refactor"_:

1. **Red**: run the tests and see what fails
2. **Green**: write some code to pass SOME of the failing tests
3. **Refactor**: rewrite the passing code so it's better code but still passes
4. _(repeat)_

If you follow this workflow you will take a small but confident step forward with each cycle until you find your way to a solution. Below is a very simple example of what this workflow might look like:

1. **Red**: the original empty function will fail all of the tests, but you run them anyway! This gives you a chance to read the test output and understand what is expected:

   ```js
   // passes no tests)
   const numberOrType = value => {};

   console.log('it should return numbers without changing them');
   console.assert(numberOrType(14) === 14, '14 -> 14');
   console.assert(numberOrType(0.0) === 0.0, '0.0 -> 0.0');
   console.assert(numberOrType(-12) === -12, '-12 -> -12');

   console.log('it should return the type of all other values');
   console.assert(numberOrType('asdf') === 'string', '"asdf" -> "string"');
   console.assert(numberOrType(false) === 'boolean', 'false -> "boolean"');
   console.assert(numberOrType(null) === 'object', 'null -> "object"');
   console.assert(
     numberOrType(undefined) === 'undefined',
     'undefined -> "undefined"'
   );
   ```

2. **Green**: Pick one (or a group) of tests that you would like to pass, and write code to pass _only_ those tests. You will still fail other tests but that's fine! Your main concern right now is passing the tests you're focusing on, you might write some bad code but that's also fine! It's more reasonable to improve code you've written than to write perfect code on your first try:

   ```js
   // passes the numbers tests
   const numberOrType = value => {
     if (value > 0) {
       return 14;
     } else if (value < 0) {
       return -12;
     } else {
       return 0;
     }
   };

   console.log('it should return numbers without changing them');
   console.assert(numberOrType(14) === 14, '14 -> 14');
   console.assert(numberOrType(0.0) === 0.0, '0.0 -> 0.0');

   console.log('it should return the type of all other values');
   console.assert(numberOrType('asdf') === 'string', '"asdf" -> "string"');
   console.assert(numberOrType(false) === 'boolean', 'false -> "boolean"');
   console.assert(numberOrType(null) === 'object', 'null -> "object"');
   console.assert(
     numberOrType(undefined) === 'undefined',
     'undefined -> "undefined"'
   );
   ```

3. **Refactor**: rewrite your code to be easier to read, more DRY, and to be a more generalized solution:

   ```js
   // passes the same tests (with better code)
   const numberOrType = value => {
     if (typeof value === 'number') {
       return value;
     }
   };

   console.log('it should return numbers without changing them');
   console.assert(numberOrType(14) === 14, '14 -> 14');
   console.assert(numberOrType(0.0) === 0.0, '0.0 -> 0.0');

   console.log('it should return the type of all other values');
   console.assert(numberOrType('asdf') === 'string', '"asdf" -> "string"');
   console.assert(numberOrType(false) === 'boolean', 'false -> "boolean"');
   console.assert(numberOrType(null) === 'object', 'null -> "object"');
   console.assert(
     numberOrType(undefined) === 'undefined',
     'undefined -> "undefined"'
   );
   ```

4. **Red & Green**: Choose some new tests to pass, and write code for those! When possible, avoid breaking code you already wrote:

   ```js
   // pass the non-number tests
   const numberOrType = value => {
     if (typeof value === 'number') {
       return value;
     }

     if (value === 'asdf') {
       return 'string';
     } else if (typeof value === 'boolean') {
       return 'boolean';
     } else if (value === null) {
       return 'object';
     } else {
       return 'undefined';
     }
   };

   console.log('it should return numbers without changing them');
   console.assert(numberOrType(14) === 14, '14 -> 14');
   console.assert(numberOrType(0.0) === 0.0, '0.0 -> 0.0');

   console.log('it should return the type of all other values');
   console.assert(numberOrType('asdf') === 'string', '"asdf" -> "string"');
   console.assert(numberOrType(false) === 'boolean', 'false -> "boolean"');
   console.assert(numberOrType(null) === 'object', 'null -> "object"');
   console.assert(
     numberOrType(undefined) === 'undefined',
     'undefined -> "undefined"'
   );
   ```

5. **Refactor!**: Go through your code again and try to write a cleaner solution without failing any tests you've already passed.

   ```js
   // pass the non-number tests
   const numberOrType = value => {
     if (typeof value === 'number') {
       return value;
     } else {
       return typeof value;
     }
   };

   console.log('it should return numbers without changing them');
   console.assert(numberOrType(14) === 14, '14 -> 14');
   console.assert(numberOrType(0.0) === 0.0, '0.0 -> 0.0');

   console.log('it should return the type of all other values');
   console.assert(numberOrType('asdf') === 'string', '"asdf" -> "string"');
   console.assert(numberOrType(false) === 'boolean', 'false -> "boolean"');
   console.assert(numberOrType(null) === 'object', 'null -> "object"');
   console.assert(
     numberOrType(undefined) === 'undefined',
     'undefined -> "undefined"'
   );
   ```
