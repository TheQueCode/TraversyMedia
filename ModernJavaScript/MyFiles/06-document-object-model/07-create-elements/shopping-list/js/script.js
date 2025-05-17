// Revisiting Section 6

// create a new div

const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'my-element');

// create text node & then append child

const text = document.createTextNode('This is my element. There are many like it, but this one is mine.');
div.appendChild(text);

//document.body.appendChild(div);
document.querySelector('ul').appendChild(div);

//console.log(div); // <div></div>


/*
const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

const text = document.createTextNode('Hello World');
div.appendChild(text);

// document.body.appendChild(div);

document.querySelector('ul').appendChild(div);
*/