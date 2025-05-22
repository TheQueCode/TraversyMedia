const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

button.addEventListener('click', (e) =>
{
  e.preventDefault();
  e.stopPropagation(); // stops event bubbling
  console.log('Button was clicked');
});

div.addEventListener('click', () =>
{
  console.log('Div was clicked');
});

form.addEventListener('click', () =>
{
  console.log('Form was clicked');
});