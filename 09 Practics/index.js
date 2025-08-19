// write a program to print the marks of studends in an object using for loop

let marks = {
    Zee: 85,
    shubham: 76,
    rohan: 43,
    jab: 4
}
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// use for in loop for question no. 1
for (const i in marks) {
    console.log(i + " : " + marks[i])        
    }

// write a program to print try again until the user enters correct number
// let cn=8
// let i
// while(i!=cn){
//     i=prompt('Enter a number')
// }

// write a function to get mean
const mean=(a,b,c,d)=>{
 return (a + b + c + d)/4
}
console.log(mean(2,3,4,5))