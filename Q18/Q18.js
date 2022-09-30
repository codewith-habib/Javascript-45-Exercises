//...Original Array
let locations = ['Saudia Arabia', 'Egypt', 'Azerbaijan', 'Palestine', 'Norway']

//...Printing Original Array
console.log(locations)

//Alphabetical order without modifying the actual list
function sorting(sor)
{
    console.log(sor.slice().sort())
}
sorting(locations)

//Array is still in its original order.
console.log(locations)

//Reverse Order without modifying the actual list
function reversing(rev)
{
    console.log(rev.slice().reverse())
}
reversing(locations)

// Array is still in its original order.
console.log(locations)

//Reverse the order of your list. Print the array to show that its order has changed.
locations.reverse()

// Print the array to show that its order has changed.
console.log(locations)

// Reverse the order of your list again.
locations.reverse()

// Print the list to show it’s back to its original order.
console.log(locations)

// Sort your array so it’s stored in alphabetical order. 
locations.sort()

// Print the array to show that its order has been changed.
console.log(locations)