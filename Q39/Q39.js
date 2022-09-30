const ps = require('prompt-sync')
const prompt = ps()

function city_country(city_name, country_name)
{
    console.log(city_name,country_name)
}

for (let i = 0; i <3; i++)
 {   
    let country = prompt("Enter Your Country Name = ")
    let name = prompt("Enter your City Name = ")
    city_country(name,country)

}
