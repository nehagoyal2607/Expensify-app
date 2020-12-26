console.log("DESTRUCTOR");
// const person = {
//     name: 'Neha',
//     age: 19,
//     location:{
//         city:'Delhi',
//         temp:97
//     }
// };

// const {name:firstName='Tanishka', age} = person;
// const {city, temp:temperature} = person.location;

// console.log(`${firstName} is ${age}`);
// console.log(`${temperature} at ${city}`);

const address = ["C-block", "Prashant Vihar", "Delhi", "India"];
const[house, , state, country, zip="110085"] = address;
console.log(`You are in ${house} in ${country}-${zip}`);