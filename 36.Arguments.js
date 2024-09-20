function multiply(num1, num2) {
	return num1 * num2;
}

console.log(multiply(2, 2));
// 4

// second argument = undefined
console.log(multiply(2));
// NaN

//anytime you dont recieve a parameter, the parameter is set to undefined


console.log(multiply(2, 2, 3847));
//4

//you could get the arguments through the .arguments method
function multiply2(num1, num2) {
	console.log(arguments);
	return num1 * num2;
}

console.log(multiply2(2, 2, 3847));


//creating a function that receives up to 10 arguments
function add(num1) {
	let addition = 0;
	for (const num of arguments)
		addition += num;
	return addition;
}

console.log(add(1, 3, 6, 10));
//20

//
