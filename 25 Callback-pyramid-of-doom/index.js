// synchronous programming
// let a=prompt("What is you name?")
// let b=prompt("What is your age?")
// let c=prompt("What is your favorite color?")
// console.log(`Hello ${a}, you are ${b} years old and your favorite color is ${c}.`);


// asynchronous programming
// console.log("start");
// setTimeout(() => {
//    console.log("i am good");
// }, 3000);
// console.log("end");



// callbacks
// function loadscript(src,callback) {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//         console.log(`${src} loaded successfully`);
//         callback(src)
//     };
//     document.head.appendChild(script);
// }
// function hello(src){
//     alert("Hello, world!" , src);
// }
// function goodmorning(src){
//     console.log("Good morning!" , src);
// }
// loadscript("https://code.jquery.com/jquery-3.6.0.min.js",hello);


function add(a, b, callback) {
  let sum = a + b;
  callback(sum); // Do whatever the user wants
}

// 👇 Define showResult first
function showResult(result) {
  console.log("Result is:", result);
}

// ✅ Now these calls will work
add(2, 3, showResult); // Output: Result is: 5

add(2, 3, function (sum) {
  console.log("Sum × 2 is:", sum * 2);  // Output: Sum × 2 is: 10
});
