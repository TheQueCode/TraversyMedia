// Revisiting Section 6

// Making a custom insertAfter()

function insertAfter (newEl, existingEl)
{
  /*
  const next = existingEl.nextElementSibling;

  const parent = existingEl.parentElement;
  parent.insertBefore(newEl, next);
  */
  existingEl.parentElement.insertBefore(newEl, existingEl.nextElementSibling);
}

const li = document.createElement('li');
li.textContent = 'Insert Me After!';

const firstItem = document.querySelector('li:first-child');


insertAfter(li, firstItem);


const boo = document.createElement('li');
boo.textContent = "Holy Poo! I gotta pee."

const notFirstItem = document.querySelector('li:nth-child(4)');


insertAfter(boo, notFirstItem);

































/*
function insertAfter (newEl, existingEl)
{
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

// New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

// The Custom Function
insertAfter(li, firstItem);
*/