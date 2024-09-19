const cat = {
	name: 'Ollie',
	age: 1,
	eyeColor: 'blue', 
}

for (const key in cat) {
	console.log(cat[key]);
}

//getting keys array from an object
const keys = Object.keys(cat);
console.log(keys);
//[ 'name', 'age', 'eyeColor' ]
console.log();

//getting keys array from an object
const values = Object.values(cat);
console.log(values);

//getting key-value pairs array from an object
const entries = Object.entries(cat);
console.log(entries);
