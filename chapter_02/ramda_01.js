// (__, curry, add, substract);

const R = require('ramda');

const greet = R.replace('{name}', R.__, 'Hello, {name}!');
console.log(greet('Alice'))