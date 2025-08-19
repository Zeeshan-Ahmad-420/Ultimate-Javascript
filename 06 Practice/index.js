// write  code which identify that your age is lies in 10 and 20
let a=prompt("Enter Your Age");
if(a>10 && a<20){
    console.log("Your age lies between 10 to 20")
}
else{
    console.log("your age does not lie between 10 to 20")
}

    console.log( a)

// Demonstrate the use of switch case statement in javascript
let ag=prompt("Enter your age");
switch(ag){
    case 12:
        console.log("your age is 12")
        break;
    case 13:
        console.log("your age is 13")
         break;
    case 14:
        console.log("your age is 14")
         break;
    case 15:
        console.log("your age is 15")
         break;
     default:
        console.log("your age is not special")
}


// write a program to find whether number is divisible by 2 or not
let num=prompt("ENTER NUMBER")
num=Number.parseInt(num)
if(num%2==0 && num%3==0){
    console.log("number is divisible by 2 and 3")
}
else{
    console.log("number is not divisible by 2 and 3")
}