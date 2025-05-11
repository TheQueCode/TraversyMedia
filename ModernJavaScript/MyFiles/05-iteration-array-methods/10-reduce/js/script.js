// Reduce walks through an array element-by-element, at each step adding the current array value to the result from the previous step - the result is the running sum of all the previous steps - until there are no more elements to add.

const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const output = numbers.reduce(function (accumulator, currentValue)
{
  return accumulator + currentValue;
}, 0);

console.log(output);

// Shorter version

const shorterOutput = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(shorterOutput);

// Using for loop

const sum = () =>
{
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
}

console.log(sum());

// Shopping cart

const cart = [
  {id: 1, name: 'Product 1', price: 130},
  {id: 2, name: 'Product 2', price: 150},
  {id: 3, name: 'Product 3', price: 175},
];

const cartTotal = cart.reduce((acc, product) => acc + product.price, 0);

console.log(cartTotal);