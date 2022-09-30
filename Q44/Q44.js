const ps = require("prompt-sync")
const prompt = ps()

function sandwitches(items)
{
    //Taking Input
    for (let i=0 ; i < elements; i++)
    {
        array[i] = prompt("Enter the Items = ")
    }
    //Display the Values
    for (let i = 0; i < elements; i++)
    {
        console.log(array[i])
    }
}

let elements = prompt("Enter the number of Elements = ")
let array = []

for (let j=0; j <3; j++) 
{
    //Calling Function Three Times
    sandwitches(array)
}


