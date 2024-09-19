const dog = { 
	name: 'Max',
	breed: 'Chihuahua',
	age: 5,
	eat: function() {
		console.log('Chomp!');
	},
	bark() {
		console.log('Woof!');
	}
}

//------------------------------
dog.bark();
dog.eat();
console.log('The dog name is ' + dog.name);
//------------------------------

// function getDog(name, breed, age){
// 	return {
// 		name: name, 
// 		breed: breed, 
// 		age: age,
// 		eat: function() {
// 			console.log('Chomp!');
// 		},
// 		bark() {
// 			console.log('Woof!');
// 		}
// 	}
// }
console.log();


//Factory functions
function getDog(name, breed, age){
	return {
		name, //when key has the same name as value
		breed, 
		age,
		eat: function() {
			console.log('Chomp!');
		},
		bark() {
			console.log('Woof!');
		}
	}
}

const anotherDog = getDog('Marley', 'Labrador', 3);
console.log(anotherDog)