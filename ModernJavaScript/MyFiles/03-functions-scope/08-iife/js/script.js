//const user = 'John';

// error as 'user' has already been declared

(function ()
{
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

(function (name)
{
  console.log(`Hello ${name}`);
})('Shawn');