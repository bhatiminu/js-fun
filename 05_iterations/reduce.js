const mynumber = [1,2,3]

// const myToltal = mynumber.reduce(function (acc, carVal) {
//     console.log(`acc: ${acc} and Current Value ${carVal}`);
    
//     return acc + carVal
// },0)

// console.log(myToltal);

// const myToltal = mynumber.reduce( (acc, carVal) => {
// console.log(`acc: ${acc} and Current Value ${carVal}`);
// return acc + carVal
// },1)
// console.log(myToltal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const addPrice = shoppingCart.reduce( (acc, curPrice) => {
    console.log(`price ${acc} and ${curPrice.price}`);
    
 return ( acc + curPrice.price)
}, 0)

console.log(addPrice);
