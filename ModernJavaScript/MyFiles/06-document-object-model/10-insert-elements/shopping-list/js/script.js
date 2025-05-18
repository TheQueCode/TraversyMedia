// Revisiting Section 6

// InsertAdjacentElement - to insert a new custom element

function insertElement ()
{
  const filter = document.querySelector('.filter');

  const newh1 = document.createElement('h1');
  newh1.textContent = 'insertAdjacentElement';

  filter.insertAdjacentElement('beforebegin', newh1 );
}

// InsertAdjacentText - to insert text

function insertText ()
{
  const item = document.querySelector('li:first-child');

  item.insertAdjacentText('afterend', 'insertAdjacentText');
}

// InsertAdjacentHTML - to insert HTML

function insertHTML ()
{
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>');
}

// insertBefore - similar to appendChild

function insertBeforeItem ()
{
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
}

insertElement();
insertText();
insertHTML();
insertBeforeItem();

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  blarty blarty blar
  <!-- beforeend -->
</p>
<!-- afterend -->
*/

























































/*
// insertAdjacentElement Example

function insertElement ()
{
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement Example';

  filter.insertAdjacentElement('beforebegin', h1);
}

// insertAdjacentText Example

function insertText ()
{ 
  const item = document.querySelector('li:first-child');
  item.insertAdjacentText('beforebegin', 'insertAdjacentText Example');
}

// insertAdjacentHTML example

function insertHTML ()
{
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML Example</h2>');
}

// insertBefore Example

function insertBeforeItem ()
{
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBeforeItem Example';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
}

insertElement();
insertText();
insertHTML();
insertBeforeItem();


<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  content
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
