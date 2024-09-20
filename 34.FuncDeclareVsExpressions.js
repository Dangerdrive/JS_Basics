//function declarations

function sayHi() {
	console.log('Hi!');
}

sayHi();

// expressions - you can do it this way since in JS functions are objects

let sayHi = function() { //in this case an anonymous function is being declared
	console.log('Hi!');
}

sayHi();

let greeting= function sayHi() {
	console.log('Hi!');
}

greeting();
