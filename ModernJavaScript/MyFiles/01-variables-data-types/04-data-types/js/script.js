// two data types:

// Primitive:
// String
/*
const firstName = 'Que';

console.log(firstName, typeof firstName); // Que string

const output = firstName;

console.log(output, typeof output); // Que string
*/
// Number
/*
const age = 30;
const temp = 98.9;

const output = temp;

console.log(output, typeof output); // 30 number
*/
// Boolean
/*
const hasKids = false;

const output = hasKids;

console.log(output, typeof output); // false boolean
*/
// Null
/*
const aptNum = null;

const output = aptNum;

console.log(output, typeof output); // null object
*/
// Undefined
/*
let score; 

const output = score;

console.log(output, typeof output); // undefined undefined
*/
// Symbol
/*
const id = Symbol("id");

const output = id;

console.log(output, typeof output); // Symbol(id) symbol
*/
// BigInt
/*
const n = 9007199254740991n;

const output = n;

console.log(output, typeof output); // 9007199254740991n bigint
*/
// Reference:
// Objects

const numbers = [1,2,3,4];

const person = { // {name: 'Que'} object
  name: 'Que'
}

function sayHello() { // sayHello() { console.log("Hello");} functiton
  console.log("Hello");
}

const output = sayHello;

console.log(output, typeof output); // [1, 2, 3, 4] object
