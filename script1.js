
// GAME - Guess the number.
let origNum = Math.floor(Math.random() * 100) + 1;
//console.log(origNum);
let a;
let chances = 0;
//a = prompt("User Input");
if (a != origNum) {
a = prompt("User Input");
  while (a != origNum) {
    chances++;
    console.log("Try again.");
    //a = prompt("User Input");
    if (a > origNum) {
      console.log("The input number is greater than the original number.");
      a = prompt("User Input");
    } else if (a < origNum) {
      console.log("The input number is less than the original number.");
      a = prompt("User Input");
    }
  }
} else
  a = prompt("User Input");
console.log("Hurrey....! This Is The Correct Number.\nThe correct Number is:- ", origNum, ".");
console.log("The Score of User is:- ", (100 - (chances + 1)), ".");


