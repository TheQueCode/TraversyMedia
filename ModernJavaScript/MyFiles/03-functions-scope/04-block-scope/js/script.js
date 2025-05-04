const x = 100;
const foo = 1;
var bar = 2; // gets added to window object

if(true){
  const y = 200;
  console.log(x + y);
}

// console.log(x + y);

for (let i = 1; i <= 10; i++){
  console.log(i);
}

// console.log(i);

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

// console.log(a); // error
// console.log(b); // error
// console.log(c); // 700

function run(){
  var d = 100;
  console.log(d);
}

run(); // 100

// console.log(d); // error