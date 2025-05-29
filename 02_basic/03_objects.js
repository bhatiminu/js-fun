// const instaUser = new Object()
const instaUser = {}
instaUser.id = "123abc",
instaUser.name = "Meenakshi",
instaUser.login = false,

console.log(instaUser)

const regularUser = {
    email: "mnksh@gmail.com",
    fullName: {
        userName : {
            fname: "meenakshi",
            lname:"Bhati"
        }
    }
}

console.log(regularUser.fullName.userName.fname);

const objts1 =  {1: "a", 2:"b"}
const objts2 =  {3: "a", 4:"b"}

// const objts3 = {objts1, objts2}
// const objts3 = Object.assign({},objts1,objts2)
const objts3 = {...objts1,...objts2}
console.log(objts3);

const user1 = [
   {
     id: "12",
    name: "minu"
},
   {
     id: "12",
    name: "minu"
},
   {
     id: "12",
    name: "minu"
}

]
user1[1].id
console.log(instaUser)
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));
console.log(instaUser.hasOwnProperty("name"));

const course = {
    Cname: "fun with js",
    Cprice: "999",
    CInstructor: "Meenu"
}

const {CInstructor: instrutor} = course

// console.log(CInstructor)
console.log(instrutor)