console.log(true || false); //true

console.log(true && false); //false

console.log(!true); //false

//null coalescing operator: '??'
//if a value is null/undefined, we supply a default value with '??'
let a = null;
const result = (a ?? 'palhaçada')
//is the same that
//const result = (a !== null && a !== undefined) ? a : 'palhaçada'

console.log(result)


//Falsy - non boolean values considered false by JS : undefined, null, 0, false, '', NaN (not a number),

let name = 'test';
const rslt = false || name;

console.log(rslt)
//prints 'test', because it is the truthy value
