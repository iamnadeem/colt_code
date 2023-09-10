let maximum = parseInt(prompt("Enter a maximum number!"));

if (!maximum){
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1 ;
console.log(targetNum)


let guess = prompt("Enter your first guess!");
let attempts = 1;

while (parseInt(guess) !==targetNum){
    if(guess === 'q') break;
    guess = parseInt(guess);
    
    if(guess > targetNum){
        guess = parseInt(prompt("Too high! Enter a new guess"));
        attempts++;
    } else if (guess < targetNum) {
        guess = parseInt(prompt("Too low! Enter a new guess!"));
        attempts++;
    } else {
        guess = parseInt(prompt("Invalid guess! Please enter a number or 'q' to quit!"));
    }
}
if (guess === 'q'){
    console.log("Ok, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
console.log(`You got it! It took you ${attempts} guesses`)
}

console.log("thank god, its weekend")
console.log("thank god, its weekend")
console.log("thank god, its weekend")
console.log("thank god, its weekend")
console.log("thank god, its weekend")