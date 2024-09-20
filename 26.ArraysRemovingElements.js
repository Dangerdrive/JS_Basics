// .pop() to remove from the end
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits); // ['apple', 'banana', 'cherry']
const lastElement = fruits.pop();
console.log(fruits); // ['apple', 'banana'] - 'cherry' is removed
console.log('Element removed: ' + lastElement)

// .splice() to remove from the middle
let colors = ['red', 'green', 'blue', 'yellow'];
console.log(colors); // ['red', 'green', 'blue', 'yellow']
colors.splice(1, 1); // removes 1 element starting at index 1 ('green')
console.log(colors); // ['red', 'blue', 'yellow']

// .shift() to remove from the beginning
let numbers = [10, 20, 30, 40];
console.log(numbers); // [10, 20, 30, 40]
numbers.shift();
console.log(numbers); // [20, 30, 40] - '10' is removed


