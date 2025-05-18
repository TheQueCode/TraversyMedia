// Revisiting Section 6

const paragraph = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run ()
{
  //console.log(itemList.className);
  //paragraph.className = 'card dark';

  // classList
  //console.log(itemList.classList);

  itemList.classList.forEach(c => console.log(c));

  //paragraph.classList.add('dark');
  //paragraph.classList.remove('card');

  // Toggle

  //paragraph.classList.toggle('dark');
  //paragraph.classList.toggle('hidden');
  //paragraph.classList.replace('card', 'dark');

  // Change style
  //itemList.style.lineHeight = '3';

  items.forEach((item, index) => index === 2 ? item.style.color = 'blue' : item.style.color = 'red');
}


document.querySelector('button').onclick = run;







































/*
const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');

function run ()
{
  //className
  //console.log(itemList.className);
  //text.className = 'card dark';

  // classList
  //console.log(itemList.classList);

  itemList.classList.forEach(c => console.log(c));

  //text.classList.add('dark');
  //text.classList.remove('card');

  //text.classList.toggle('dark');
  //text.classList.toggle('hidden');

  //text.classList.replace('card', 'dark');

  // Change style
  //itemList.style.lineHeight = '3';

  items.forEach((item, index) =>
  {
    index === 2 ? item.style.color = 'blue' : item.style.color = 'red';
  });
}
document.querySelector('button').onclick = run;
*/