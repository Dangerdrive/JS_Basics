const num = [2, 8, 10, 11];

const sqrNum = num.map(sqr => sqr * sqr);
console.log(sqrNum);


//-----------------
const chars = ['a', 'b', 'c', 'd'];
const upper = chars.map(up => up.toUpperCase());
console.log(upper);

//------------

const employees = [
	{id: 1, name: 'Gin', email: 'GinGEr@gmail.com'},
	{id: 1, name: 'Ollie', email: 'GolLIra@gmail.com'},
	{id: 1, name: 'Samba', email: 'SaMBA@gmail.com'},
]

const updEmployee = employees.map(employee => ({
	...employee,
	email: employee.email.toLowerCase()
}))

console.log(updEmployee);

