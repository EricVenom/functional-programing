const _ = require('lodash');

const arr = [1, 2, 3, 4, 5, 6]
console.log(_.chunk(arr, 2)) // chunks of 2 pieces

const arr2 = [false, "", 0, 1, 2, 3]
console.log(_.compact(arr2)) // removes all falsey values

console.log(_.concat(arr, [_.compact(arr2)])) // concatenates 2 arrs

const users = [
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'pebbles', 'age': 1 }
]

const youngest = _.chain(users).sortBy('age').map(o => o.user + ' is ' + o.age).head().value()
console.log(youngest)