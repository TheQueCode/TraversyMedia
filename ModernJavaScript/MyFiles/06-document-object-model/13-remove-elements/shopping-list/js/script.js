// Revisiting Section 6

// Removing DOM elements

// Remove & Remove Child - [Remove: on element you want removed] - [Remove child called on parent of element you want to remove]
/*
function removeClearBtn ()
{
  document.querySelector('#clear').remove();
}

removeClearBtn();

function removeFirstItem ()
{
  const parent = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  parent.removeChild(li);
}

removeFirstItem();

function removeItem (itemNumber)
{
  document.querySelector(`li:nth-child(${itemNumber})`).remove();
}

removeItem(1);


function removeItem2 (itemNumber)
{
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1]; 

  ul.removeChild(li);
}

removeItem2(1);


function removeItem3 (itemNummber)
{
  const li = document.querySelectorAll('li');
  li[itemNummber - 1].remove();
}

removeItem3(1);

const removeItem4 = itemNumber => document.querySelectorAll('li')[itemNumber - 1].remove();


removeItem4();
*/

/*
function removeClearButton ()
{
  const clearBtn = document.querySelector('#clear')
  clearBtn.remove();
}

function removeFirstItem ()
{
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  ul.removeChild(li);
}

function removeItem (itemNumber)
{
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}

function removeItem2 (itemNumber)
{
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];

  ul.removeChild(li);
}

function removeItem3 (itemNumber)
{
  const li = document.querySelectorAll('li');
  li[itemNumber - 1].remove();
}

const removeItem4 = itemNumber => document.querySelectorAll('li')[itemNumber -1].remove();

//removeClearButton();
//removeFirstItem();
//removeItem(2);
//removeItem2(1);
//removeItem3(3);
//removeItem4(2);
*/