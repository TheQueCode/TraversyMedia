const form = document.getElementById('item-form');

function onSubmit (e)
{
  e.preventDefault();
  console.log('submit');

  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === '0') {
    console.log('Please fill in all fields');
    return;
  }
    
  console.log(item, priority);
}

form.addEventListener('submit', onSubmit)

// if you don't have an action attribute on your form where you're submitting to some kind of backend, then it's going to submit to the same page.


// form data object

function onSubmit2 (e)
{
  e.preventDefault();

  const formData = new FormData(form);

  console.log(formData);

  //const item = formData.get('item');
  //const priority = formData.get('priority');

  const entries = formData.entries();
  //console.log(entries);

  for (let entry of entries) {
    console.log(entry[1]);
  }

  //console.log(item, priority);

}

form.addEventListener('submit', onSubmit2);