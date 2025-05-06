// Function Challenges

// Create a function called getCelsius() that takes temp in Fahrenheit & returns temp in Celsius

// for bonus points, write it as a one line arrow function

const getCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;

console.log(`The temperate is ${getCelsius(102)} \xB0C`);

// Create an arrow function called minMax() that takes in an array and returns an object with the min and max numbers

const minMax = arr => ({ 
  min: Math.min(...arr),
  max: Math.max(...arr) 
});

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([13, 33, 1110, 888, 1111]));

// create an IIFE that takes in the length and width of a rectangle and outputs it to the console in a message as soon as the page loads.

((length, width) => 
{
  const area = length * width
  console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`);
})(10, 5);