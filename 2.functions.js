
function sayHi(name) {
	console.log('Hi ' + name);
}

sayHi('Wilton');


//functions standard return is 'undefined'

let ret = sayHi('cadeira');
console.log(ret);	

//--------------------------------------------------------------

function sayHey(name) {
	console.log('Hey ' + name);
	return 2
}

sayHi('Wiltonson');


ret = sayHey('chair');
console.log(ret);	