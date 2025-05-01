let x;

const person = {
  name: 'Que Code',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main St.',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'computers', 'sports']
};

x = person.name;
x = person['age'];

x = person.address.state; // MA
x = person.hobbies[1]; // computers

person.name = 'Quinn Code';
person['isAdmin'] = false;

delete person.age;

person.hasChildren = false;

person.greet = function(){
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

x = person;


console.log(x);

