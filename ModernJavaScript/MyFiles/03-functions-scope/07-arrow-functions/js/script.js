/*
function add(a, b){
  return a + b;
}

console.log(add(1, 2));
*/

// arrow function

const add = (a, b) => {
  return a + b;
};

// Implicit Return
const subtract = (a, b) => a - b;

// Can leave off () with a single param
const double = a => a * 2;

// Returning an object - surround {} with ()

const createObj = () => ({
  name: 'Que'
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

// Arrow Function in a callback (callback is a function called in another function)
numbers.forEach(n => console.log(n));

console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(double(10));
console.log(createObj());