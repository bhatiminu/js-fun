// this referes current contex
// inside browser this geves window object. In browser: Window object
// inside node this gives emplty object // If called in the global scope, this refers to the global object (window in browsers, global in Node.js).
// If this 
//When invoked as a standalone function (not attached to an object: func()), this typically refers to the global object
const user = {
    username: "Meenakshi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to `);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Meenakshi"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Meenakshi"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "meenakshi"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicity function no need to use return keyword 
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))
