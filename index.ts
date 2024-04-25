#! /usr /bin/env/node

import  inquirer from "inquirer";

//1 computer will generate a random  number-Done.

//2 user input for guessing number

//3 compare user input with computer generate number and show result

const randomNumber = Math.floor(Math.random()*6+1);
console.log("randomNumber");

const answers = await inquirer.prompt ([
{
    name:"userGuessedNumber",
    type: "number",
    message: "please guess a number between 1-6: ",
},

]);
if (answers.userGuessedNumber === randomNumber){
    console.log("congration! you guessed right number");
} else {
    console.log("you wrong guessed a number");
}