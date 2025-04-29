// Dates

let d;

d = new Date(); // Tue Apr 29 2025 14:53:32 GMT-0500 (Central Daylight Time)

d = d.toString();

d = new Date(2021, 6, 10); // Sat Jul 10 2021 00:00:00 GMT-0500 (Central Daylight Time) -- Used 6th month but got July -- Months are ZERO indexed

d = new Date(2021, 0, 10, 12, 30, 0); // Sun Jan 10 2021 12:30:00 GMT-0600 (Central Standard Time)

d = new Date('2021-07-10'); // Fri Jul 09 2021 19:00:00 GMT-0500 (Central Daylight Time) -- This gives us July but the date is off because the year is first. Time zones

d = new Date('2021-07-10T12:30:00'); // Sat Jul 10 2021 12:30:00 GMT-0500 (Central Daylight Time)

d = new Date('07/10/2021'); // Sat Jul 10 2021 00:00:00 GMT-0500 (Central Daylight Time)

d = new Date('2022-07-10'); // year first - date is off - Sat Jul 09 2022 19:00:00 GMT-0500 (Central Daylight Time)


// Time Stamps

d = Date.now(); 

d = new Date('07-10-2022 12:30:00');
d = d.getTime(); // 1657474200000
d = d.valueOf();

d = new Date(1657474200000); // Sun Jul 10 2022 12:30:00 GMT-0500 (Central Daylight Time)

d = Math.floor(Date.now() / 1000);

console.log(d);