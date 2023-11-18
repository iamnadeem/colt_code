function singSong(){
    console.log('Do');
    console.log('Re');
    console.log('Mi');
}

singSong();
singSong();

function printHeart(){
    console.log("<3");
}

printHeart();

console.log('*************');


// function rant(message){

//     for (let i=0; i<3;i++){
//         console.log(message.toUpperCase());
//     }
// }
//     // console.log(message.toUpperCase());
//     // console.log(message.toUpperCase());

// rant("i hate beets");


// function isSnakeEyes(roll1, roll2){
//     if ((roll1===1) && (roll2===1)){
//         console.log('Snake Eyes!');
//     }
//     else{
//         console.log('Not Snake Eyes');
//     }
// }
// isSnakeEyes(2,2);
// function isSnakeEyes(die1, die2) {
//     if (die1 === 1 && die2 === 1) {
//       console.log('Snake Eyes!');
//     } else {
//       console.log('Not Snake Eyes!');
//     }
//   }

//   // DEFINE YOUR FUNCTION BELOW:
// function multiply(num1, num2){
//     return num1 * num2;
// }

// // DEFINE YOUR FUNCTION BELOW: for temperature for shorts or pants

// function isShortsWeather(temperature){
//     if(temperature >= 75){
//         return true;
//     }
//     return false;
// }

// // DEFINE YOUR FUNCTION BELOW: returning the last element of the array
// function lastElement(arr){
//     if(arr.length > 0){
//         return arr[arr.length-1];
//     }else{
//         return null;
//     }
      
// }

//capitalise the first letter = e.g. Bombay
/*
SOLUTION #1:

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
*/

// function capitalize(str){
//     const firstLetter = str[0].toUpperCase();
//     const rest = str.slice(1);
//     return firstLetter+rest;
    
// }       
// str = 'hello';

// DEFINE YOUR FUNCTION BELOW: for SUM OF ALL THE ARRay NUMBERS
// function sumArray(Arr){
//     // arr[]=[1,2,3]
//     let sum = 0
//     for(let i=0; i<Arr.length ; i++){
//         sum = sum + Arr[i];
//     }
//     console.log(sum);
//     return sum; 
    
    
// }

//sumArray(Arr=[1,3,3]);
// sumArray(Arr=[10,10,10]);
/**
 * SOLUTION #1:

function sumArray(nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}
SOLUTION #2:

function sumArray(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}
 */

// DEFINE YOUR FUNCTION BELOW: days of the week
// function returnDay(i){
//     const days= ['null','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    
   
//     if(i<1 || i>7){
//         return null
//     }
//     return days[i]
    
// }

// Storing a function inside a variable. Also, executing this code.
let num = 9;
const square = function(num){
    console.log(num*num);
    return num*num;
}

num = 9;
console.log 