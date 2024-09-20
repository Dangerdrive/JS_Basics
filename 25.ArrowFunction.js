// function add(num1 + num2) {
// 	return num1 + num2;
// }

const add = (num1, num2) => num1 + num2;

// the same as
// const add = (num1, num2) =>
// 	return num1 + num2;


//--------------------------------------------

const employees = [
	{
		id: 1,
		name: 'Ollie'
	},
	{
		id: 2,
		name: 'Gin'
	},
	{
		id: 3,
		name: 'Pam'
	},
];

const employee = employees.find((e) => e.name ==='Gin');

console.log(employee);
//{ id: 2, name: 'Gin' }

// const employee = employees.find(function(e) {
// 	return e.name ==='Gin';
// })
const employeeIndex = employees.findIndex((e) => e.name ==='Gin');

console.log(employeeIndex);


