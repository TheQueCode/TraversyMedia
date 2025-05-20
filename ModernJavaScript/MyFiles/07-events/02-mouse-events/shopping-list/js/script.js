// functions

const logo = document.querySelector('img');

const onClick = () => console.log('Clickity Click Click');
const onDblClick = () =>
{ 
  (document.body.style.backgroundColor !== 'black', document.body.style.color !== 'white') ? (document.body.style.backgroundColor = 'black', document.body.style.color = 'white') : (document.body.style.backgroundColor = 'white', document.body.style.color = 'black');
}

const onRightClick = () => console.log('Right click event');

const onMouseDown = () => console.log('Mouse Down Event');
const onMouseUp = () => console.log('Mouse Up Event');

const onMouseWheel = () => console.log('Mouse Wheel Event');

const onMouseOver = () => console.log('Mouse Over Event');
const onMouseOut = () => console.log('Mouse Out Event');

const onDragStart = () => console.log('Drag Start Event');
const onDrag = () => console.log('Drag Event');
const onDragEnd = () => console.log('Drag End Event');

// Event Listeners

logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDblClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);