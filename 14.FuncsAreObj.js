function add(num1, num2) {
	return num1 + num2;
}

const n = add;

console.log(n(2, 3));

//lenght shows number of parameters the function accepts
console.log(add.length);