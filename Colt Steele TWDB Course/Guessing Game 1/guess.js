var secretNumber = 20;

var stringGuess = prompt("Guess a number!!");
var guess = Number(stringGuess);

if(guess === secretNumber){
    alert("You got it right!!");
}

else if(guess > secretNumber){
    alert("Too High!! Guess Again");
}

else{
    alert("Too low!! Guess Again");
}