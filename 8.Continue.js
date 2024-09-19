for (let i = 0; i < 20; i++) {
	if (i % 2 === 0) //if 'i' is pair, skips to the next iteration;
		continue;
	console.log(i);
}

const obj = {a:1, b: 2, c: 3, d: 4}
for (let key in obj) {
	if (obj[key] % 2 === 0) {
		continue;
	}
	console.log(obj[key]);
}

const arr = [1, 2, 3, 4, 5 , 6, 7, 8, 9]
for(let element of arr) {
	if (element % 2 === 0) {
		continue;
	}
	console.log(element);
}