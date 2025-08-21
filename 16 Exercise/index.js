// snake water gun game
function playGame(){
    let choices=["snake","water","gun"];
    let userChoice = prompt("Enter your choice (snake, water, gun):").toLowerCase();
    let computerChoice=choices[Math.floor(Math.random()*3)];

    alert("Computer chose: " + computerChoice);
    if(userChoice===computerChoice){
        alert("Both play good game draw")
    }
   else if(
    (userChoice === "snake" && computerChoice === "water") ||
    (userChoice === "water" && computerChoice === "gun") ||
    (userChoice==="gun" && computerChoice ==="snake")
   )
   alert("Congratulations! You win!")
   else if(choices.includes(userChoice)){
    alert("So Sad! you lose computer Wins!")
   }
   else{
    alert("Invalid choice! Please enter snake, water, or gun.")
   }
}
playGame()
