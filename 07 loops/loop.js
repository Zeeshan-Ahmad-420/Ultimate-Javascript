//for of
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//for in loop

let obj={
    Zee:90,
    jab:67,
    alladin:89,
}
for (const a in obj) {
   console.log("Marks of student " + a + " is "  + obj[a])
}

//for of loop
for (const b of "Zee") {
    console.log(b);
}

// do while loop
let n = prompt("Enter value of n:");
n = Number.parseInt(n);  

let i = 0;
do {
    console.log("Current value of i is:", i);
    i++;
} while (i < n);
