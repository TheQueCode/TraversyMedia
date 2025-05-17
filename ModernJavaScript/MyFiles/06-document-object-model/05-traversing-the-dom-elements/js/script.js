// Revisiting Section 6

// Element Relationships

// Get child elements from the parent

let output;

const parent = document.querySelector('.parent');
output = parent.children; // HTMLCollection of div's
output = parent.children[1]; // <div class="child">Child 2</div>
output = parent.children[1].innerText; // Child 2
output = parent.children[1].className; // child
output = parent.children[1].nodeName; // DIV

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red'; 

parent.firstElementChild.textContent = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get parent elements from a child element

const child = document.querySelector('.child:first-child');

output = child.parentElement; // <div class="parent">...</div>
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Sibling elements

const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem; // Child Two

output = secondItem.nextElementSibling; // Child Three
secondItem.nextElementSibling.style.color = 'purple';

output = secondItem.previousElementSibling; // Child One
secondItem.previousElementSibling.style.color = 'orange';













console.log(output);








































/*
let output;

// Get child elements
 
const parent = document.querySelector('.parent');

output = parent.children;

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].textContent = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.textContent = 'Child One';
parent.lastElementChild.textContent = 'Child Three';

// Get parent elements from a child

const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Sibling elements

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
output = secondItem.nextElementSibling; // Child Three

secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';

console.log(output);
// console.dir(output);
*/