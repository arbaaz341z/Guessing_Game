/*********************************
**********************************
**  Coded By: Mohammed Arbaaz   **
**********************************
**********************************/

let number= Math.floor((Math.random()* 100) +1);
let guess;
let chance=10;
let score=100;
console.log("******Az Guess The Number*****");
console.log("Welcome to the Guessig Game. \nIn this game you have to guess a number. Guess in less chances to get more points.\n Rules: Number could be in between 1-100 hence you'll have 100 chances to guess the right number");
let name = prompt("Enter your Name");
console.log("Welcome to the game", name);



while(chance>0){
  chance--;
  score-=10;
  if(chance>0){
guess=prompt("Enter the guessing number: ");
  guess=Number.parseInt(guess);
  if(guess===number && guess<=100){
    console.log("***********************************");
    console.log("***********************************");
    console.log(`Congratulations! \n ${guess} is the correct guess...\n Your Score is ${score}`);
    console.log("***********************************");
    console.log("***********************************");
    break;
  }else if(guess>number && guess<=100){
    console.log("***********************************");
    console.log(`${guess} is greater than the number | ${chance} chances left`);
    console.log("***********************************");
  }else if(guess<number && guess<=100){
    console.log("***********************************");
    console.log(`${guess} is smaller than the number  | ${chance} chances left`); 
    console.log("***********************************");
  }else{
    console.log("***********************************");
    console.log(`${guess} is invalid Entry- Please Enter a Valid Number between 1 to 100  | ${chance} chances left `)
    console.log("***********************************");
  }}else{
    console.log("***********************************");
    console.log("***********************************");
     console.log(`You Loose | Chances Over \n ${number} is the correct guess...\n Your Score is ${score}`);
    console.log("***********************************");
    console.log("***********************************");
  }
}
