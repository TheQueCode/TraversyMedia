// For of Loop

// Loop through arrays

const items = ['book', 'table', 'chair', 'kite'];
const users = [
  {name: 'Que'},
  {name: 'Quinn'},
  {name: 'Quade'},
  {name: 'Kaza'},
  {name: 'Cause'},
];

for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user.name);
}

// Loop through strings

const str = 'Hello world';

for (const letter of str) {
  console.log(letter);
}

// Loop over maps

const map = new Map();
map.set('name', 'Quinn');
map.set('age', '33');

for (const [key, value] of map) {
  console.log(key, value);
}