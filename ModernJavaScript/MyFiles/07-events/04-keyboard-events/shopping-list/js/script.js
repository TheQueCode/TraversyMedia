const itemInput = document.querySelector('#item-input');

const onKeyPress = e => console.log('keypress');
const onKeyUp = e => console.log('keyup');
const onKeyDown = e => console.log('keydown');

// getting the keys being pressed


const gettingKey = e =>
{
  // key - some older browsers don't support this
  if (e.key === 'q') console.log('You pressed Q');


  // keyCode
  // https://www.toptal.com/developers/keycode/table
  if (e.keyCode === 87) console.log('You pressed W');


  // code
  if (e.code === 'Digit1') console.log('You pressed 1');
  
  // repeat - only works if key is being held down - Boolean
  if (e.repeat) console.log(`You are holding down the ${e.key} key`);

  console.log(`Shift: ${e.shiftKey}`); // Boolean
  //console.log(`Control: ${e.ctrlKey}`);
  console.log(`Alt: ${e.altKey}`);

  if (e.shiftKey && e.key === 'K') console.log('You hit shift + K');
}

//itemInput.addEventListener('keypress', onKeyPress);
//itemInput.addEventListener('keyup', onKeyUp);
//itemInput.addEventListener('keydown', onKeyDown);

// getting the keys being pressed
itemInput.addEventListener('keydown', gettingKey); 