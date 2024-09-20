let now = new Date();
console.log(now);
//p.e. 2024-09-20T03:16:09.190Z

let Jan01_1970 = new Date(0);
console.log(Jan01_1970);
//1970-01-01T00:00:00.000Z

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);
//1969-12-31T00:00:00.000Z

const dateOne = new Date('December 25 2024 16:08');
console.log(dateOne);
//2024-12-25T19:08:00.000Z

const Jan1_2024 = new Date(2024, 0, 1);
//(year, month index, day)
console.log(Jan1_2024);
//2024-01-01T03:00:00.000Z

now.getFullYear();
now.getMonth();
now.getTimeZoneOffset();
