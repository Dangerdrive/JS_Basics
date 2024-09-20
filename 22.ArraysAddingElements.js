let numbers = [5, 4, 3, 2, 1];

numbers.push(7);
numbers.push(9, 16);
console.log(numbers);
// [
// 	5, 4, 3,  2,
// 	1, 7, 9, 16
//   ]

//adding elements to the beggining
numbers = [5, 4, 3, 2, 1];
numbers.unshift(7, 14);
console.log(numbers);
// [
// 	7, 14, 5, 4,
// 	3,  2, 1
//   ]

// after the 1st elements, deleting 0 elements, adding n elements
numbers = [5, 4, 3, 2, 1];
numbers.splice(1, 0, 8, 17);
console.log(numbers);
// [
// 	5, 8, 17, 4,
// 	3, 2,  1
//   ]
