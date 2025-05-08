// There are 6 Falsy Values:

// - false
// - 0
// - An empty string ('' or "" or ``)
// - null
// - undefined
// - NaN

const x = NaN;

if (x) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}
console.log(Boolean(x));

// Truthy Values:

// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} ( empty object)
// - function (){} (empty function)

const y = [];

if (y) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(y));

// truthy and falsy caveats

const children = 0;

if (!isNaN(children)) {
  console.log(`You have ${children} children.`);
} else {
  console.log('Please enter number of children.');
}

// checking for empty arrays

const posts = [];

if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}


// checking for empty objects

const user = {};

if (Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No User');
}

// Loose Equality (==)

console.log(false == 0); // true
console.log("" == 0); // true
console.log(null == undefined); // true

console.log(false === 0); // false
console.log("" === 0); // false
console.log(null === undefined); // false