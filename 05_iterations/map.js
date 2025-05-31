const num = [1,2,3,4,5,6,7,8,9]

// const newNum = num.map( (nn) => {return nn * 2})
// console.log(newNum)

// chaning of map filter

const newNum = num.map( (nn) => {return nn*10}).map( (nn) => {return nn+1}).filter((nn)=> {return nn>40})

console.log(newNum);
