const course = {
	name: 'Javascript for Beginners',
	duration: 3,
	sections: 9
};

//use for-in to iterate through object properties
for (const key in course) {
	console.log(course[key]);
}