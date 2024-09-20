//.every() to test if all elements of the array satisfy the conditions

let num = [2, 6, 8, 18, 20];

const areAllEven = num.every(number => {
	return number % 2 === 0
});

console.log(`areAllEven :${areAllEven}`);


//.some() to test if any element satisfies the condition

num = [1, 3, 5, 7, 8, 9];

const hasOneEvenNum = num.some(number => number % 2 === 0);
console.log(hasOneEvenNum);
