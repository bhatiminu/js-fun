const obje = {
    js: "javascript",
    cpp: "c++",
    rb: "rubi",
}

for (const key in obje) {
   console.log(`${key} is ${obje[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
//    console.log(programming[key]);
   
}
// map not working here beause its not itration 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}