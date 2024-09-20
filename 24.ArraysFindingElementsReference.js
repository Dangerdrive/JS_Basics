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

const employee = employees.find(function(e) {
	return e.name ==='Gin';
})

console.log(employee);
//{ id: 2, name: 'Gin' }

const employeeIndex = employees.findIndex(function(e) {
	return e.name ==='Gin';
})

console.log(employeeIndex);
