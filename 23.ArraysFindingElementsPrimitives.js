//Primitive data types x Reference data types(objs)

//primitive data types - .indexOf .lastIndexOf .includes


let numbers = [5, 4, 3, 2, 1, 3];

const indexOfThree = numbers.indexOf(3);
console.log(indexOfThree);

console.log( numbers[indexOfThree]);

const lastIndexOfThree = numbers.lastIndexOf(3);
console.log(lastIndexOfThree);
// 5

const indexOfTen = numbers.lastIndexOf(10);
// for a value not found, it returns -1
console.log(indexOfTen);
console.log( numbers[indexOfTen] );
// undefined

//good practice:
if (indexOfTen === -1) {
	console.log('Ten was not found');
}

//include: returns true or false if value is included
if (numbers.includes(10)) {
	console.log('10 was found')
}
