const ps = require('prompt-sync')
const prompt = ps()

let current_users = ['Habib', 'Ahsan', 'Haider', 'Yasir', 'Usman', 'Sarim']
let new_users = ['Habib', 'Ali', 'Ibrahim', 'Bilal', 'Saifullah', 'Sarim']


function names(users)
{
    for (i=0; i>=new_users.length; i++)
    {
        if(new_users.includes('Habib'))
        {
            console.log('You will need to enter a new username.')
        }

        else if(new_users.includes('Sarim'))
        {
            console.log('You will need to enter a new username.')
        }

        else if (new_users.includes('Ali'))
        {
            console.log('Username is Available')
        }

        else if (new_users.includes('Ibrahim'))
        {
            console.log('Username is Available')
        }

        else if (new_users.includes('Bilal'))
        {
            console.log('Username is Available')
        }

        else if (new_users.includes('Saifullah'))
        {
           console.log('Username is Available')
        }
    }
}

let name = prompt('Enter a username = ')

names(name)
