const promiseOne = new Promise(function(resolve, reject){
    // do an async task 
    setTimeout(function() {
        console.log("Meenakshi");
        resolve()
    },1000)
})
// consume krna 
promiseOne.then(function() {
    console.log('promise consumed');
    
})


new Promise(function(resolve, reject){
setTimeout(function(){
    console.log("Second task");
    resolve()
},1000)
}).then(function(){
    console.log('promise consumed second');
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:'minu'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
          resolve({username: "Minu", password: "123"})  
        }
        else{
            reject('Error coming')
        }
    },1000)
})
// chaining 
promiseFour.then((user) => {
console.log(user);
return user.username
}).then((username) => {
    console.log(username);
    
}).catch((err) => {
    console.log(err);
}).finally(() => console.log('finally')) // allways exicuit 

const promiseFive = new Promise(function(resolve, reject){
       setTimeout(function(){
        let error = true
        if(!error) {
          resolve({username: "java script", password: "123"})  
        }
        else{
            reject('Error coming java script')
        }
    },1000)
})

async function consumepromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);  
    } catch (error) {
        console.log(error);
    }
}
consumepromiseFive()

// async function getallUser() {
//     try {
//   const response =   await fetch('https://api.github.com/users/bhatiminu')
//   const data = await response.json()
//   console.log(data);
  
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// getallUser()

fetch('https://api.github.com/users/bhatiminu')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
