// window object methods & properties

// alert('Hello');
// console.log(window.innerWidth);

const x = 100;

console.log(x, 'in Global Scope');

function run(){
  console.log(window.innerHeight);
  console.log(x, 'in function score');
}

run();

if(true){
  console.log(x, 'in block scope');
}

function add(){
  const x = 1;
  const y = 50;
  console.log(x + y);
}

// console.log(y);

add();