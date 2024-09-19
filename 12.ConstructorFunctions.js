
//for construction function, use a noun Pascal Case
function Dog(name, breed, age, weight) {
	// implicit
	// this = {};
	//   -> add properties to this object
	this.name = name;
	this.breed = breed;
	this.age = age;
	this.weight = weight;

	this.eat = function() {
		console.log(this.name + ': Chomp!');
	}

	// return this;
}

const anotherDog = new Dog('Marley', 'Lab', 3, 12);

console.log(anotherDog);

//objects in JS are dynamic. So we can add properties or methods on the fly:
anotherDog.height = 80;

console.log(anotherDog);

//same with other sintax:
anotherDog['height'] = 75;
console.log(anotherDog);

delete anotherDog.height;
console.log(anotherDog);
