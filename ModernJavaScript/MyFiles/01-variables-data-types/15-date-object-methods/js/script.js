let x;

let d = new Date();

x = d.toString();
x = d.getTime();
x = d.valueOf();

x = d.getFullYear(); // 2025

x = d.getMonth(); // 3 (One month behind - zero based)
x = d.getMonth() + 1; // 4

x = d.getDate(); // 29
x = d.getDay(); // 2 (Tuesday)

x = d.getHours(); // 15
x = d.getMinutes(); // 17
x = d.getSeconds(); // 8
x = d.getMilliseconds(); // 579

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; // 2025-4-29

// Date API (Intl.DateTimeFormat)

x = Intl.DateTimeFormat('en-US').format(d); // 4/29/2025
x = Intl.DateTimeFormat('en-GB').format(d); // 29/04/2025
x = Intl.DateTimeFormat('default').format(d); // default for area - 4/29/2025

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d); // April

x = d.toLocaleString('default', { month: 'short' }); // Apr

x = d.toLocaleString('default', { 
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/Chicago'
}); // Tuesday, April 29, 2025 at 3:29:39 PM






console.log(x);