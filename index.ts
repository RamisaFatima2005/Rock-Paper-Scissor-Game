#! /usr/bin/env node
import inquirer from "inquirer";
const choices = ["Rock", "Paper", "Scissor"]
    const randomObject= choices[Math.floor(Math.random() * choices.length)];
    

console.log("Welcome to rock,paper,scissor game")

const userChoice = await inquirer.prompt([
    {name:"object",
     message:"Please choose one option",
    type:"list",
    choices:["Rock","Paper","Scissor"]}
])

//conditional statements
if(userChoice.object == randomObject){
    console.log("Tie")
}
    else if(userChoice.object === "Rock" && randomObject === "Paper"){
        console.log("You Lost")
    }
    else if (userChoice.object === "Paper" && randomObject === "Scissor"){
        console.log("You Lost")
    }
    else if (userChoice.object === "Scissor" && randomObject === "Rock"){
        console.log("You Lost")
    }
else{
    console.log("You Won")
}
console.log(`Computer choose ${randomObject}`)