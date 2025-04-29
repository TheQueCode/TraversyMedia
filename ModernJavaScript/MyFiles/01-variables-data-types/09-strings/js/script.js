let x;

const name = 'John';
const age = 30;
x = "Hello, my name is " + name + " and I am " + age + " years old.";

// Template Literals

x = `Hello, my name is ${name} and I am ${age} years old.`

// String Properties and Methods

const s = "Hello World"

x = s.length; // 11

// Access value by key

x = s[0]; // H

// Access object prototype

x = s.__proto__;

x = s.toUpperCase(); // HELLO WORLD
x = s.toLowerCase(); // hello world

x = s.charAt(0); // H

x = s.indexOf('H'); // 0
x = s.indexOf('e'); // 1
x = s.indexOf('d'); // 10

x = s.substring(0, 4); // Hell
x = s.substring(0, 5); // Hello
x = s.substring(1, 5); // ello
x = s.substring(7); // orld

x = s.slice(0, 5); // Hello
x = s.slice(-11, -6); // Hello

x = s.trim(); // Gets rid of whitespace

x = s.replace("World", "Chris"); // Hello Chris

x = s.includes('Hello'); // true
x = s.includes('Helli'); // false

x = s.valueOf(); // Hello World

x = s.split(" "); // Splits string into an array
x = s.split('');


console.log(x);