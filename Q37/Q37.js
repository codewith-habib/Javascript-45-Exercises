const ps = require('prompt-sync') 
const prompt = ps()

function make_shirt(sizes,msg,size)
 {
    if(sizes == 'medium')
    {
        console.log('I Have Medium Shirt.And',msg)
        console.log('The Size of My Shirt is = ', size)
    }
    if(sizes == 'large')
    {
        console.log('I Have Large Shirt.And',msg)
        console.log('The Size of My Shirt is = ', size)
    }
    
}

let a = prompt("Want Medium or Large Shirt? = ")
let b = prompt("Enter Your Size = ")

make_shirt(a,'I Love Java Script',b)