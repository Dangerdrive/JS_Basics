const exampleArr1 = [1, 2, 3];
const exampleArr2 = [9, 8, 7];

const combinedArr = exampleArr1.concat(exampleArr2);
console.log(combinedArr);

//slice(startIndex, endIndex)
const slicedArr = combinedArr.slice(2, 7);
console.log(slicedArr);



//spread operator
// can be used to copy properties of an object or the elements of an array

let combined = [...exampleArr1, 14, ...exampleArr2];
let copyArr = [...exampleArr1];
console.log(combined);
