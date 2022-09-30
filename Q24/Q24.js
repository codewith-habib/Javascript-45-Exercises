// Tests for equality and inequality with strings

let name = 'Muhammad Habib Ur Rehman'

if (name == 'Muhammad Habib Ur Rehman')
{
    console.log("Name Matched")
}
else
{
    console.log('Name doesnt matched')
}


//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let number = 2
if (number == 2)
{
    console.log('Numbers are Equal')
}
else if (number != 2)
{
    console.log('Numbers are inequal')
}

else if (number > 2)
{
    console.log('Numbers are Greater')
}

else if (number < 2)
{
    console.log('Numbers are Smaller')
}

else if (number >= 2)
{
    console.log('Numbers are Greater or Equal')
}

else if (number <= 2)
{
    console.log('Numbers are Smaller or Equal')
}


//Tests using "and" and "or" operators
let age = 20

if (name == 'Muammad Habib Ur Rehman' || name == 'muhammad Habib Ur Rehman')
{
    console.log("Name Matched")
}

if (age ==  20 && name == 'Muhammad Habib Ur Rehman')
{
    console.log('Data Matched')
}


// Test whether an item is in a array
let names = ['Habib', 'Ahsan', 'Haider']
if (names.includes('Habib'))
{
    console.log('Name is in Array')
}
else
{
    console.log('Name is not in Array')
}