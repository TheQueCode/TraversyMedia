let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// Nesting
/*
fruits.push(berries);

x = fruits;

x = fruits[3][1]; // blueberry

const allFruits = [fruits, berries];

x = allFruits;

x = allFruits[1][0]; // strawberry
*/
// Concat

x = fruits.concat(berries)

// Spread Operator (...) Arrays/Objects

x = [...fruits, ...berries];

// Flatten Arrays

const arr = [1,2,[3,4],5,[6,7],8];
x = arr.flat();

// Static methods on array object

x = Array.isArray(fruits); // true // fruits is an array

x = Array.from("12345"); // ['1', '2', '3', '4', '5']

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c); // [1, 2, 3]


console.log(x);