let x;

const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232
    }
  }
}

x = person.address.coords.lat;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {obj1, obj2};

x = obj3; // {obj1: {...}, obj2: {...}}

const obj4 = {...obj1, ...obj2};

x = obj4; // {a: 1, b: 2, c: 3, d: 4}

const obj5 = Object.assign({}, obj1, obj2);

x = obj5;

const todos = [
  { id: 1, name: 'Buy Milk'},
  { id: 2, name: 'Pickup Kids'},
  { id: 3, name: 'Take out Trash'},
];

x = todos[0].name;

x = Object.keys(todo);

x = Object.keys(todo).length; // 3

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty('name'); // true
x = todo.hasOwnProperty('age'); // false

console.log(x);