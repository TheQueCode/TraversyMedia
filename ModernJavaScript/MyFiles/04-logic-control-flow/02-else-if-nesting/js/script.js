const d = new Date(10, 31, 2025, 6, 0, 0);
const hour = d.getHours();

console.log(hour);

// Else - if

if (hour < 12) {
  console.log("Good Morning!");
} else if (hour < 18){
  console.log("Good Afernoon!");
} else {
  console.log("Good Night!");
}

// Nested If

if (hour < 12) {
  console.log("Good Morning!");
  if (hour === 6) {
    console.log("Wake up!");
  }
} else if (hour < 18){
  console.log("Good Afernoon!");
} else {
  console.log("Good Night!");
  if (hour >= 20) {
    console.log("Go to bed!");
  }
}

if (hour >= 7 && hour < 15) {
  console.log("Work time!");
}

if (hour === 6 || hour === 20) {
  console.log("Brush your teeth");
}