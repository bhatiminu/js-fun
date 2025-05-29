// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const users = {
    name: "Meenakshi",
    email: "mnksh.bht93@gmail.com",
    [mySym]: "key12",
    phone: "8844666008",
    address: "udaipur",
    state: "rajasthan",
    "full name":"Meenakshi Bhati",
}

console.log(users.email);
console.log(users["email"]);
console.log(users["full name"]);
console.log(typeof users[mySym]);

users.email = "meenu@gmail.com"
console.log(users);
// Object.freeze(users)
users.email = "meenu@chatgpt.com"
console.log(users);

users.greeting = function() {
    console.log("hello users");
}
users.greetingTwo = function() {
    console.log(`hello users ${this.name}`);
}

console.log(users.greeting())
console.log(users.greetingTwo())