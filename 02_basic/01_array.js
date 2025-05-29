const myNewarr = [1, 2, 3, 4, 5, 6];
const mixArr = [1, 2, "Meenu", false];
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myNewarr[2]);
// console.log(myNewarr.push(3));
// console.log(myNewarr);
// console.log(myNewarr.pop());
// console.log(myNewarr);
// console.log(myNewarr.unshift(2));
// console.log(myNewarr);
// console.log(myNewarr.shift(2));
// console.log(myNewarr.includes(3));
// console.log(myNewarr.indexOf(13));
// console.log(myNewarr.join());


//slice and splice 
// console.log("orignal array", myNewarr);
// console.log("slice", myNewarr.slice(2, 5));
// console.log(myNewarr);
// console.log("splice", myNewarr.splice(2, 5)); // original array manipulation 
// console.log(myNewarr);
// console.log(Array.isArray("Meenakshi"));
console.log(Array.from("Meenakshi"));

const fruits = ["apple", "banana", "orange"]
const veg = ["beens", "chili"]

// fruits.push(veg)
// console.log(fruits);

// const newMargeArr = fruits.concat(veg)
// console.log(newMargeArr);
 const spredArr = [...fruits, ...veg]
 console.log(spredArr);

 const mixArrNum = [1,3,2,[8,8],[3,4,[4,3]]]

 const realArry = mixArrNum.flat(Infinity)
 console.log(realArry);

 const score1 = 100
 const score2 = 300
 const score3 = 400

 console.log(Array.of(score1, score2, score3))
 











