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
function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
      console.log('Snake Eyes!');
    } else {
      console.log('Not Snake Eyes!');
    }
  }

  // DEFINE YOUR FUNCTION BELOW:
function multiply(num1, num2){
    return num1 * num2;
}