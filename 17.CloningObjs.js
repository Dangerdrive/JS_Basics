let a = { value: 10}
let b = a;

b.value = 20;

// as objects are copied by reference, changin the value in one changes the other.
console.log(a.value);

//----------------------------------------------

//so we need to clone the obj

let c = { value: 10} ;
let d = {};

Object.assign(d, c);

d.value = 20;

console.log(c);
console.log(d);

//other sintax - spread operator

let e = { value: 10} ;
let f = {...e};

Object.assign(f, e);

f.value = 20;

console.log(e);
console.log(f);
