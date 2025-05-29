const dateTime = new Date();
console.log(dateTime.toString());
console.log(dateTime.toDateString());
console.log(dateTime.toISOString());
console.log(dateTime.toLocaleString());
console.log(typeof dateTime);

const newDate = new Date(2023, 1, 24, 5,3);
// console.log(newDate.toDateString());
console.log(newDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(newDate.getTime());
console.log(Math.floor(Date.now()/1000));
console.log(newDate.getDay());



