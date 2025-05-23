// Revisiting Section 6

// Selecting single elements

// document.getElementById();

console.log(document.getElementById('app-title')); // <h1 id="app-title">Shopping List</h1>
console.log(document.getElementById('app-title').id); //app-title
console.log(document.getElementById('app-title').className); //boo

console.log(document.getElementById('app-title').getAttribute('id')); //app-title
console.log(document.getElementById('app-title').getAttribute('class')); //boo

// Set attributes
document.getElementById('app-title').title = 'Shopping List';

document.getElementById('app-title').setAttribute('class', 'title');
console.log(document.getElementById('app-title').className); //title

const title = document.getElementById('app-title');

console.log(title); // <h1 id="app-title" class="title" title="Shopping List">Shopping List</h1>

// Get or change element content

console.log(title.textContent); // Shopping List
title.textContent = 'Hello World';
title.innerText = 'Hello World';
title.innerHTML = '<strong>Shopping List</strong>';

// Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';


// document.querySelector()

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText); // Orange Juice

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'Orange';

// Use these methods on other elements

const list = document.querySelector('ul');
console.log(list.innerText); 
// Apples
// Apple Juice
// Oreos
// Milk

const firstItem = list.querySelector('li:first-child');
console.log(firstItem.innerText); // Apples

firstItem.style.color = 'green';

/*
// document.getEleementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

// Set attributes

document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');

// console.log(title);

// Get/change element content

console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

// Change style
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector()

//console.log(document.querySelector('h1'));
//console.log(document.querySelector('#app-title'));
//console.log(document.querySelector('.container'));
//console.log(document.querySelector('input[type=text'));
//console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');

secondItem.innerText = "Apple Juice";
secondItem.style.color = 'red';

// Use these methods on other elements

const list = document.querySelector('ul');
console.log(list);

const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';
*/