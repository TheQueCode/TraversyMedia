let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39];
const mixed = [12, 'hello', true, null];

// Array Constructor
const fruits = new Array('apple', 'grape','orange');

x = numbers[0]; // 12

x = numbers[0] + numbers[3]; // 41 - 12 + 29

x = `My favorie fruit is an $"fruits[2]`;

x = numbers.length; // 5

fruits[1] = 'pear';
x = fruits;

fruits.push('strawberry');

console.log(x);
