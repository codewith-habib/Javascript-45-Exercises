let name = 'Muhamamd habib ur rehman';

function titlecase(name)
{
    return name2.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' ');

}
console.log(titlecase(name));