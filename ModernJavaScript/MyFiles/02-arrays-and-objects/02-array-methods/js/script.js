let x;

const arr = [34, 55, 95, 20, 15];
/*
arr.push(100); // [34, 55, 95, 20, 15, 100]

arr.pop(); // [34, 55, 95, 20, 15]

arr.unshift(99); // [99, 34, 55, 95, 20, 15]

arr.shift(); // [34, 55, 95, 20, 15]

arr.reverse(); // [15, 20,95, 55, 34]
*/
x = arr.includes(20); // true
x = arr.includes(200); // false

x = arr.indexOf(15); // 4
x = arr.indexOf(34); // 0
x = arr.indexOf(340); // -1

x = arr.slice(1, 4); // [55, 95, 20] // arr = [34, 55, 95, 20, 15]

// x= arr.splice(1, 4); // [55, 95, 20, 15] // arr = [34]
// x = arr.splice(3, 1); // 20 // arr = [34, 55, 95, 15]

x = arr.splice(1, 4).reverse().toString().charAt(0); // 1


console.log(x);