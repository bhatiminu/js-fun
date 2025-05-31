// Array specific loop

const arry = [1,2,3,4,5,6]

for(const num of arry) {
    // console.log(num);  
}

let myArray = ["flash", "batman", "superman"]

for (const grret of myArray) {
    // console.log(grret)
}
const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Map (uniq value )

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObj = {
    "username": "Meenakshi",
     "username2": "Meenakshi"
}
for (const [key, value] of myObj) {
    console.log(key, '-', value);
    
}