document.write("Hello World")

const sum=(a,b)=>{
    console.log("The sum is:" + (a+b))
    a + b
}
setTimeout(() => {
    sum(4,5)
}, 4000);

setInterval(() => {
    alert("i will be repeated every 3 sec")
}, 3000);
// let a =setTimeout(function(){
//     alert("i am Zeeshan")
// },4000)
// let b=prompt("do you want to run the timeout?")
// if("n"==b){
//     clearTimeout(a)
// }
// console.log(a)