// Revisiting Section 6

// querySelectorAll();

const listItems = document.querySelectorAll('.item');

console.log(listItems[2].innerText); // Oreos

listItems.forEach(items => console.log(items.innerText)); 
// Apples
// Orange Juice
// Oreos
// Milk
/*
listItems.forEach((item, index) =>
{
  item.style.color = 'blue'

  index === 0 ? item.innerHTML = 'Oranges <button class="remove-item btn-link text-red" title="Remove" type="button"> <i class="fa-solid fa-xmark"></i></button>' : item.style.color = 'hotpink';
});
*/

// Get elements by Class Name

const listItems2 = document.getElementsByClassName('item');
console.log(listItems2); // HTMLCollection !! Not a Node List
console.log(listItems2[2].innerText); // Oreos

//listItems2.forEach(item => console.log(item.innerText)); // ERROR: listItems2.forEach is not a function

const newListItems = Array.from(listItems2);
newListItems.forEach(item => console.log(item.innerText));  

// Make the HTMLCollection an array first**

// Get elements by Tag name

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3); //HTMLCollection
console.log(listItems3[1].innerText); // Orange Juice

/*
// querySelectorAll()

const listItems = document.querySelectorAll('.item');
console.log(listItems);
console.log(listItems[1].innerText);

// listItems[1].style.color = 'red' // doesn't work // NODE List, not array

listItems.forEach((item, index) =>
{
  item.style.color = 'red';

  if (index === 1) item.remove();

  if (index === 0) item.innerHTML = `Oranges
          <button class="remove-item btn-link text-red" title="button">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
});


const listItems2 = document.getElementsByClassName('item');
console.log(listItems2); // HTML Collection - NOT a NODE List

console.log(listItems2[2].innerText);

//listItems2.forEach(item => { console.log(item.innerText);}); // ERROR - forEach is not a function

const listItemsArray = Array.from(listItems2);
listItemsArray.forEach(item => console.log(item.innerText))

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0].innerText); // HTML collection
*/