
let num=Math.floor(Math.random()*100);
console.log(num);
let chances=0;
let guess;
while(guess!=num){
 guess=parseInt(prompt("Enter your guess"));
 if (guess<num) {
   alert("to low");
   chances++;
 } 
 else if(guess == num) {
   alert("you guss right number!")
   chances++;
   break;
 }
 else {
 alert("to high")
   chances++;
 }
}
alert(`You took ${chances} chances to guess the number ${num}`);
