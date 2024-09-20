const num = [2, 8, 10, 11];

const sum = num.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
}, 0);

console.log(sum);
