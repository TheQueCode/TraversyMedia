console.log(100);
console.log("Hello, World");
console.log(20, "'ello", true);

const x = 100;
console.log(x);

console.error("Alert");
console.warn("Warning");

console.table({name: 'Que', email: 'que@email.com'});

console.group("simple");
console.log(x);
console.error("Alert");
console.warn("Warning");
console.groupEnd();

const styles = "padding: 10px; background-color: white; color: green";

console.log("%cHello, World", styles);