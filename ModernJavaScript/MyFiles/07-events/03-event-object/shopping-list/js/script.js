const logo = document.querySelector('img');

function onDrag (e)
{
  document.querySelector('h1').textContent = `X: ${e.clientX} Y: ${e.clientY}`;
}
logo.addEventListener('click', e => console.log(e));
logo.addEventListener('click', e => console.log(e.target));
logo.addEventListener('click', e => console.log(e.currentTarget));
// Inside a function this would work (e.target.style.backgroundColor = 'black';)
logo.addEventListener('click', e => console.log(e.type)); //click
logo.addEventListener('click', e => console.log(e.timeStamp)); 
logo.addEventListener('click', e => console.log(e.clientX)); // horizontal
logo.addEventListener('click', e => console.log(e.clientY)); //vertical
logo.addEventListener('click', e => console.log(e.offsetX)); 
logo.addEventListener('click', e => console.log(e.offsetY)); 
logo.addEventListener('click', e => console.log(e.pageX)); 
logo.addEventListener('click', e => console.log(e.pageY)); 
logo.addEventListener('click', e => console.log(e.screenX)); 
logo.addEventListener('click', e => console.log(e.screenY)); 

logo.addEventListener('drag', onDrag);

// prevent default behavior

document.querySelector('a').addEventListener('click', e =>
{
  e.preventDefault()
  console.log('Link was clicked')
});




/*
document.body.addEventListener('click', function (e)
{
  console.log(e.target);
  console.log(e.currentTarget);
});
*/
/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/

