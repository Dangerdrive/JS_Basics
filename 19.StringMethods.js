const name = 'Ollie'; // const is appropriate because the value of name will not change
console.log('type of:\t' + typeof name);
//string

let sentence = " A new sentence. "; // let is correct if sentence may be reassigned later

// includes returns true or false if the substring variable is present in the string.
const doesIncludeNew = sentence.includes('new'); // const is used here correctly; no reassignment needed
console.log('3rd char: \t' + sentence[3]);

const startsWithA = sentence.startsWith('A'); // const is correct; no reassignment intended
console.log(startsWithA);

const endsWithA = sentence.endsWith('A'); // const is correct; no reassignment intended
console.log(endsWithA);

let updatedSentence = sentence.replace('new', 'short'); // let is used correctly; reassignment might occur
console.log('updated sentence:\t' + updatedSentence);

const trimmedSentence = sentence.trim(); // const is appropriate as trimmedSentence is not reassigned
console.log('Trimmed sentence (deletes spaces at the beginning and end):\t' + trimmedSentence);

const wordsInSentence = sentence.split(' ');
console.log(wordsInSentence);
//returns an array of strings

let email = 'OlliEDIas@gmAil.com';
let lowerCaseEmail = email.toLowerCase();
console.log(lowerCaseEmail);

// reference
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
// Objetos Globais
// String
// Construtor

//     String() constructor

// Métodos estáticos

//     String.fromCharCode()
//     String.fromCodePoint()
//     String.raw()

// Métodos de instância

//     String.prototype.anchor() Deprecated
//     String.prototype.at()
//     String.prototype.big() Deprecated
//     String.prototype.blink() Deprecated
//     String.prototype.bold() Deprecated
//     String.prototype.charAt()
//     String.prototype.charCodeAt()
//     String.prototype.codePointAt()
//     String.prototype.concat()
//     String.prototype.endsWith()
//     String.prototype.fixed() Deprecated
//     String.prototype.fontcolor() Deprecated
//     String.prototype.fontsize() Deprecated
//     String.prototype.includes()
//     String.prototype.indexOf()
//     String.prototype.isWellFormed()
//     String.prototype.italics() Deprecated
//     String.prototype.lastIndexOf()
//     String.prototype.link() Deprecated
//     String.prototype.localeCompare()
//     String.prototype.match()
//     String.prototype.matchAll()
//     String.prototype.normalize()
//     String.prototype.padEnd()
//     String.prototype.padStart()
//     String.prototype.repeat()
//     String.prototype.replace()
//     String.prototype.replaceAll()
//     String.prototype.search()
//     String.prototype.slice()
//     String.prototype.small() Deprecated
//     String.prototype.split()
//     String.prototype.startsWith()
//     String.prototype.strike() Deprecated
//     String.prototype.sub() Deprecated
//     String.prototype.substr() Deprecated
//     String.prototype.substring()
//     String.prototype.sup() Deprecated
//     String.prototype[@@iterator]()
//     String.prototype.toLocaleLowerCase()
//     String.prototype.toLocaleUpperCase()
//     String.prototype.toLowerCase()
//     String.prototype.toString()
//     String.prototype.toUpperCase()
//     String.prototype.toWellFormed()
//     String.prototype.trim()
//     String.prototype.trimEnd()
//     String.prototype.trimStart()
//     String.prototype.valueOf()

// Propriedades de instância

//     String.length

// Herança
// Object/Function
// Métodos estáticos

// Propriedades estáticas

// Métodos de instância

// Propriedades de instância
