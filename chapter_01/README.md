## DECLARATIVE, PURE AND IMMUTABLE
### This chapter covers
- Thinking in functional terms
- Learning what and why of functional programming
- Understanding the principles of immutability and pure functions
- Functional programming techniques and their impact on overall design

> "OO makes code understandable by encapsulating moving parts. <br/>
> FP makes code understandable by minimizing moving parts." <br/>
> —Michael Feathers (Twitter)

- Functional programming is *declarative*: it's a paradigm that expresses a set of operations
without revealing how they're implemented or how data flows through them. 

- *Imperative* programming treats a computer program as merely a sequence of top-to-bottom
statements that changes the state of the system in order to compute a result.

Example of imperative programming to square all numbers in an array:
```javascript
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i = 0; i < array.length; i++) {
 array[i] = Math.pow(array[i], 2);
}
array; // -> [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

- *Declarative* programming, on the other hand, separates program description from evaluation.
It focuses on the use of expressions to describe what the logic of a program is without 
necessarily specifying its control flow or state changes. 
An example of declarative programming is found in SQL statements.

Example of declarative programming to solve tackle the same task.
```javascript
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => Math.pow(num, 2)) // -> [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

**Translating lambda notation to regular function notation**
Lambda expressions provide an enormous syntactical advantage over regular function notations because 
they reduce the structure of a function call down to the most important pieces. This ES6 lambda expression:
```javascript
num => Math.pow(num, 2)
```
is equivalent to the following function:
```javascript
function(num) {
    return Math.pow(num, 2);
}
```
## Pure Functions
A pure function has the following qualities:
- It depends only on the input provided and not on any hidden or external state that may change during its evaluation or between calls.
- It doesn’t inflict changes beyond their scope, such as modifying a global object or a parameter passed by reference.

