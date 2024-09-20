let course = {
	name: 'Javascript for Beginners',
	duration: '3 hours'
};

let newCourse = {
	...course,
	name: 'Javascript 102'
};

console.log(newCourse);


//-------------------------------

function multiply(...args) {
	return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

console.log(multiply(1, 2, 3, 4, 5))

function multiply(multiplier, ...additionalArgs) {
	return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

console.log(multiply(1, 2, 3, 4, 5))


