// // DON'T TOUCH THIS LINE!
// const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// // YOUR CODE BELOW THIS LINE:

// let whisper = message.trim()

// whisper = whisper.toLowerCase()

// code giving multiple other methods to light

// ===================
// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

let box = word.slice(5);

const facialHair = box.replace("o", "e");

console.log(facialHair);

console.log("I love learning Javascript");  



// let facialHair = word.slice(5).replace("o", "e");

// Number is even code

// let num = 568
// // function isEven(num){
//     //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    
//     if (num%2 == 0){
//         console.log("even");
//     }
   
   
    //AND THIS LINE ↑↑↑↑↑
// }
// =====Conditional Statements > if, else if, else 

// function getColor(phrase){
//     //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    
//     if (phrase == 'stop'){
//         console.log('red');
//     }
//     else if (phrase == 'slow'){
//         console.log('yellow');
//     }
//     else if (phrase == 'go'){
//         console.log('green');
//     }
//     else {
//         console.log('purple');
//     }
   
   
//     //AND THIS LINE ↑↑↑↑↑
// }

// ==========NESTING loops 

// Change the value of num, so that "YOU GOT ME!" prints out
// const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 
// if(num <= 100) {
//     if(num >= 50) {
//         console.log("HEY!");
//     }
// } else {
//     if (num < 103) {
//         if(num % 2 === 0){
//             console.log("YOU GOT ME!");
//         }
//     }
// }

// Logical Operators

// const mystery = 'Person7aa'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// LEAVE THIS CODE ALONE! (pretty please)
// if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
//     console.log("YOU GOT IT!!!");
// }

// ARRAY - Your first Data Structure
// Define lottoNumbers below:

// let lottoNumbers = [1,2,3,4,5,6];

// const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:

// leaderboard[1] = 'Luna';
// leaderboard[3] = 'Draco';

// Array Methods

// const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// // YOUR CODE GOES BELOW THIS LINE:

// planets.shift()

// planets.unshift('Mercury')

// Array Nested together

// DO NOT TOUCH!!! (please)
// const airplaneSeats = [
//     ['Ruth', 'Anthony', 'Stevie'],
//     ['Amelia', 'Pedro', 'Maya'],
//     ['Xavier', 'Ananya', 'Luis'],
//     ['Luke', null, 'Deniz'],
//     ['Rin', 'Sakura', 'Francisco']
// ];

// YOUR CODE GOES BELOW THIS LINE:

// airplaneSeats[3][1] = 'Hugo'

// planets.push('Saturn')

// Your first Object Literal

// const product = {
//     name : "Gummy Bears",
//     inStock: true,
//     price : 1.99,
//     flavors: ["grape", "apple", "cherry"]
// }

//PLEASE DON'T TOUCH THIS LINE! MSOT TIME CONSUMING CODE FOR ME.... DAMN
// const restaurant = {
//     name: 'Ichiran Ramen',
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: 'Brooklyn',
//     state: 'NY',
//     zipcode: '11206',
// }

//YOUR CODE GOES DOWN HERE:

// const fullAddress = `${restaurant["address"]}, ${restaurant["city"]}, ${restaurant["state"]} ${restaurant["zipcode"]}`

// My first For loop 

// Print out "Da ba dee da ba daa" 6 times, using a for loop

for (let i=1 ; i<=6 ; i++){
    console.log("Da ba dee da ba daa")
}

// more For loop exercises
// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0

for (let i=25 ; i>=0 ; i-=5){
    console.log(i);
}