# Deep Copy

In programming, there are two fundamental ways of copying objects: Shallow copy and Deep copy.
In order to understand deep copy, we need to first understand what is shallow copy.
An Analogy: If a teacher writes some text on the blackboard and students copy the text in their notebook,
that is deep copy, because the text is both on the blackboard and in the notebooks.
If a teachers reads the text from a book and students only note down page numbers, then it is shallow copy,
because the text is _only_ present in the book and everyone (including the teacher) is referring to the
page numbers of the book.

## Shallow copy
In shallow copy, only references are copied. Both references point to the same object in the memory.
Consider the following array of employee objects:
```
> const lodash = require('lodash') // JS Library that contains utility functions like clone and cloneDeep
> employees = [
... { "name": "John", "age": 30, salary: 5000},
... { "name": "Ana", "age": 28, salary: 6000},
... { "name": "Ali", age: 24, salary: 5500}
... ]
[
  { name: 'John', age: 30, salary: 5000 },
  { name: 'Ana', age: 28, salary: 6000 },
  { name: 'Ali', age: 24, salary: 5500 }
]
> shallow_copy_of_employees = lodash.clone(employees) // shallow_copy_of_employees = employees //also makes shallow copy
[
  { name: 'John', age: 30, salary: 5000 },
  { name: 'Ana', age: 28, salary: 6000 },
  { name: 'Ali', age: 24, salary: 5500 }
]
> shallow_copy_of_employees[0].name = 'Ben'; // Change the name of the first employee
'Ben'
> employees // Original array of objects is affected
[
  { name: 'Ben', age: 30, salary: 5000 },
  { name: 'Ana', age: 28, salary: 6000 },
  { name: 'Ali', age: 24, salary: 5500 }
]
```

## Deep Copy
In Deep copy, both references and the values of the objects are copied. Each reference points to
its own object in the memory. Let us continue the previous example of array of employee objects:

```
> deep_copy_of_employees = lodash.cloneDeep(employees) // Deep copy function from lodash library
[
  { name: 'Ben', age: 30, salary: 5000 },
  { name: 'Ana', age: 28, salary: 6000 },
  { name: 'Ali', age: 24, salary: 5500 }
]
> deep_copy_of_employees[0].name = 'Federico'; // Change the name of the first employee in deeply copied object
'Federico'
> employees // Original array of objects i NOT affected
[
  { name: 'Ben', age: 30, salary: 5000 },
  { name: 'Ana', age: 28, salary: 6000 },
  { name: 'Ali', age: 24, salary: 5500 }
]
> deep_copy_of_employees // Only deep copied object is affected
[
  { name: 'Federico', age: 30, salary: 5000 },
  { name: 'Ana', age: 28, salary: 6000 },
  { name: 'Ali', age: 24, salary: 5500 }
]

## Further reading
[This Medium article](https://medium.com/@manjuladube/understanding-deep-and-shallow-copy-in-javascript-13438bad941c)
provides a possible implementation of deep cloning in pure JS. 
