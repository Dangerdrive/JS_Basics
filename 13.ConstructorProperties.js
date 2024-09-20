const person = {
	name: "Wilton",
};

console.log(person.constructor)

let newObj = {};
//implicitly is the same as:
let newObj = new Object();

new String(); // is called when we assign 'Wilton' for instance
new Boolean();// is called when we assign true or false
new Number(); // is called when we assign a number


//constructor function that exists for all objets in JS, used to instantiate and create the object