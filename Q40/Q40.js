const ps = require('prompt-sync')
const prompt = ps()


function make_album(artist_name,album_title, number_of_tracks)
{
    
    console.log(artist_name,'\n',album_title, number_of_tracks)
       
}

for (let index = 0; index <3; index++)
 {
   
    let name = prompt('Enter the Artist Name = ')
    let title = prompt('Enter the Album Title = ')

    let AN = {'Artist Name' : name}
    let AT = {'Album Title' : title}
    make_album(AN,AT,)
}
let name = prompt('Enter the Artist Name = ')
let title = prompt('Enter the Album Title = ')

let AN = {'Artist Name' : name}
let AT = {'Album Title' : title}
make_album(AN,AT,'5 Tracks')
