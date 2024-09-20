const arr = [1, 2, 3, 4, 5];

const joinedNum = arr.join(' - ');
console.log(joinedNum);

//chained methods

const courseName = 'Javascript for Begginners';

// const lowerName = courseName.toLowerCase();
// const substrs = courseName.split(' ');

const substrs2 = courseName
	.toLowerCase()
	.split(' ')
	.join(' - ');

console.log(substrs2);

