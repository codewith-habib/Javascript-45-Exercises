const ps = require("prompt-sync")
const prompt = ps()

let elements = prompt("Enter the number of Languages = ")
let array = []

//Taking Input
for (let i=0 ; i < elements; i++)
{
    array[i] = prompt("Enter Names = ")
}
//Display the Values
for (let i = 0; i < elements; i++)
{
    console.log(array[i])
}

