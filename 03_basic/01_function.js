function sayMyName(){
    console.log("M");
    console.log("I");
    console.log("N");
    console.log("U");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Meenakshi"))
console.log(loginUserMessage())

function calcCart(...num1) {
    return num1
}
console.log(calcCart(100,200,300));

const user = {
    userName: "Minu",
    city: "udaipur",
}

function userDetail(detail) {
    console.log(`my name is ${detail.userName} at ${detail.city}`);  
}
// userDetail(user);

userDetail({
    userName: "sam",
    city: "goa",
})

const myNewArr = [200,300,600]

function returnSecArry(getArry) {
    return getArry[1]
}

console.log(returnSecArry(myNewArr));
