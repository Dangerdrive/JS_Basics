let course = {
	name: 'JavaScript for Beginners',
	hours: 3	
};

//more common approach - using '.'
console.log(course.name);

//changing values
course.name = 'Javascript Fundamentals';
console.log(course.name);

//less common
console.log(course['name']);

course['name'] = 'JavaScript 101';
console.log(course['name']);
