// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 5; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 4; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );
   }
}

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}

for (let i = 0; i <=20; i++) {
    if (i == 5) {
        console.log("detected 5");
        break;
    }
    console.log(`${i}`);   
}

for (let i = 0; i <=20; i++) {
    if (i == 5) {
        console.log("detected 5");
        continue;
    }
    console.log(`${i}`);  
}