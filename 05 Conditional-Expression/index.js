let a = prompt('hey i am age?')
a = Number.parseInt(a) //convert string to number
if(a>0){
    alert("this is invalid age")
}
else if(a<9){
    alert("you are kid you cannot think anything")
}
else if(a<18 && a>=9){
    alert("you are kid you can think after 18 years old")
}
else{
    alert("this is an valid age")
}