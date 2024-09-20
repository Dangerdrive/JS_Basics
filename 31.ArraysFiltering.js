const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNum = num.filter(number => number % 2 != 0);
console.log(oddNum);

//-------------------------------
//array containing objects
let cats = [
	{ id: 1, name: 'Ollie', color: "Black"},
	{ id: 2, name: 'Gin', color: "Orange"},
	{ id: 3, name: 'Samba', color: "Black"},
];

const blackCats = cats.filter(cat => {
	return cat.color === 'Black';
})

console.log(blackCats);
