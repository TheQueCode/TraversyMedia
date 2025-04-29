// Values are stored on the stack (Primitive Values)

const name = 'Que';
const age = 30;

// Reference values are stored on the heap (Reference Values)

const person = {
  name: 'Que',
  age: 40
}

let newName = name;
newName = 'Quinn';

let newPerson = person;
newPerson.name = 'Quinn';

console.log(name, newName);
console.log(person, newPerson);