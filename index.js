#! /usr/bin/env node
import inquirer from "inquirer";
const random = Math.floor(Math.random() * 7 + 1);
const answers = await inquirer.prompt([{
        message: "Please guess a number between 1 - 7 : ",
        type: "number",
        name: "Guessednumber",
    }]);
if (answers.Guessednumber === random) {
    console.log("Congratulations you guessed a right number");
    console.log("Author : Engineer Ayaz Ahmed Laghari");
}
else {
    console.log("You Guessed wrong number");
}
