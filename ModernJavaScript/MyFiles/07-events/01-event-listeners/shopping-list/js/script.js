// Revisiting Section 7

function onClear ()
{
  document.querySelectorAll('li').forEach(li => li.remove());
}

// JavaScript Event Listener

const clearBtn = document.querySelector('#clear');

//clearBtn.addEventListener('click', () => console.log('Clear Items'));

clearBtn.addEventListener('click', onClear);

//setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000); 

//setTimeout(() => clearBtn.click(), 5000);


























/*
function onClear ()
{
  console.log('On Clear');
}
const clearBtn = document.querySelector('#clear');

// JavaScript Event Listener

clearBtn.onclick = function ()
{
  console.log('Clear Items');
}


// Add event Listener
// clearBtn.addEventListener('click', () => console.log('Clear Items'));
//clearBtn.addEventListener('click', onClear);

// when removing, remove event listener first

//setTimeout(() => clearBtn.removeEventListener('click', onClear),5000); 

//setTimeout(() => clearBtn.click(), 5000);
*/

