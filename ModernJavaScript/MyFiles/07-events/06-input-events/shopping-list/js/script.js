const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput (e)
{
  heading.textContent = e.target.value;
}

function onChecked (e)
{
  const isChecked = e.target.checked; // Boolean - true or false
  heading.textContent = isChecked ? 'Checked' : 'Not Checked'
}

// Normally used for styling

function onFocus ()
{ 
  console.log('Input is Focused');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'red';
};

function onBlur ()
{
  console.log('Input is Not Focused');
  itemInput.style.outlineStyle = 'none';
};

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onInput); // there's also a change but it's recommended to use input

checkbox.addEventListener('input', onChecked);

itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);