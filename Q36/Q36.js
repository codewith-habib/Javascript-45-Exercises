const ps = require('prompt-sync') 
const prompt = ps()

function make_shirt(size, text)
 {
    console.log("Your Shirt Size is",size,".And ", text, "Will be Prinetd on it.")
}

let a = prompt("Enter Your Size = ")
let b = prompt("Enter the Text = ")
make_shirt(a,b)