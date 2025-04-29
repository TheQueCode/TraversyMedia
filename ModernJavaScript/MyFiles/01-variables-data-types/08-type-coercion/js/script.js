let x;

x = 5 + '5'; // 55 string

x = 5 + +'5';

x = 5 * '5'; // 25 number

x = 5 + null; // 5 number

x = 5 + true; // 6 number

x = 5 + false; // 5 number

x = 5 + 5 + undefined; // NaN number




console.log(x, typeof x);