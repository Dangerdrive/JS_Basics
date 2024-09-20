let cats = [
	{ id: 1, name: 'Ollie'},
	{ id: 2, name: 'Gin'},
	{ id: 3, name: 'Samba'},
];

//for objs sort recieves a compare function
//so, to sort by name property:
cats.sort((a, b) => {
	const lowercaseA = a.name.toLowerCase();
	const lowercaseB = b.name.toLowerCase();

	if (lowercaseA < lowercaseB) return -1;
	if (lowercaseB < lowercaseA) return 1;
	return 0;
});

console.log(cats);

//it could be simplified to
cats.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
