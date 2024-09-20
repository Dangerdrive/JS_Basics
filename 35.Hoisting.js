//hoisting is a process that moves all the declarations to the top of their scope.

function add(num1, num2) {
	console.long(num1 + num2)
}

add(2, 2);

//because of hoisting, you could call the function before its declaration
add(2, 2);

function add(num1, num2) {
	console.long(num1 + num2)
}


//it does apply to function expressions
let add2 = function(num1, num2) {
	console.log(num1 +num2)
}
//in this case, you could only call add2 after the expression.
//Calling it before would give syntax error


//you can rename an expression.
//renaming a declared function change the function in all its scope
