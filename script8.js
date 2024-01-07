console.log("Date and Time")

let currentDate = new Date(2002,10,1);
console.log(currentDate);

let milisec = new Date().getTime();
console.log(milisec);   // milisecond spend from greenwich date i.e; 1 Jan 1970

let date = new Date();

// Year
console.log(date.getFullYear());

// Month
console.log(date.getMonth());

// Day (Sunday-0 to saturday-6)
console.log(date.getDay());

// Date
console.log(date.getDate());

// hours
console.log(date.getHours());

// minutes
console.log(date.getMinutes());

// seconds
console.log(date.getSeconds());

// miliseconds
console.log(date.getMilliseconds());
