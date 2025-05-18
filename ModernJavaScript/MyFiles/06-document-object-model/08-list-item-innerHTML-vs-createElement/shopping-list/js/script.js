// Revisiting Section 6

// Create Element & Add to the DOM


// Try 1


function addOn (item)
{
  const parent = document.querySelector('ul');

  const newLi = document.createElement('li');
  newLi.innerHTML = `${item} <button class="remove-item btn-link text-red" title="Remove" type="button">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
  
  parent.appendChild(newLi);
};

addOn('Eggs');
addOn('Bacon');
addOn('Cheese');
addOn('Pizza');


// Try 2


function anotherAddOn (item)
{
  const parent = document.querySelector('ul');
  
  const newLi = document.createElement('li');

  const newText = document.createTextNode(item);
  
  const newBtn = document.createElement('button');
  newBtn.className = 'remove-item btn-link text-red';
  newBtn.title = 'Remove';
  newBtn.type = 'button';
  newLi.appendChild(newBtn);
  
  const newI = document.createElement('i');
  newI.className = 'fa-solid fa-xmark';

  parent.appendChild(newLi)
  newLi.appendChild(newText)
  newLi.appendChild(newBtn);
  newBtn.appendChild(newI);

}

anotherAddOn('Grapes');
anotherAddOn('Tomatoes');
anotherAddOn('Salad');
anotherAddOn('Potatos');
anotherAddOn('Steak');



/*
// Quick & Dirty

function createListItem (item)
{
  const li = document. createElement('li');

  li.innerHTML = `${item}
          <button class="remove-item btn-link text-red" title="button">
            <i class="fa-solid fa-xmark"></i>
          </button>`

  document.querySelector('.items').appendChild(li);
}

// Clean & Performant

function createNewItem (item)
{
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';
  button.title = 'button';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector('.items').appendChild(li);

}

createListItem('Eggs');
createNewItem('Cheese');

*/