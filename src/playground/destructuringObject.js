
const person = {
    name: 'Andrew',
    age: 27,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
}

// console.log(`${person.name} is ${person.age}.`)

// solution #1 

/*
const name = person.name
const age = person.age
// problem: doesn't scale well and have to do it for each input

*/
//solution 2 ######Destructuring###############
// const {name, age} = person

// Default Value
// const {name = 'Anonymous', age} = person

// Goal is to use 

// console.log(`${name} is ${age}.`)


const {name: firstName = 'Anonymous', age} = person

// Goal is to use 

// console.log(`${name} is ${age}.`)
console.log(`${firstName} is ${age}.`)

// ==============================================================

// # Problem
/*
if (person.location.city && person.location.temp) {
    console.log(`It's ${person.location.temp} in ${person.location.city}`)
}
*/
// Fix it with #########3Destructuring####### 
// const {city, temp} = person.location


// Renaming  Syntax
const {city, temp: temperature} = person.location

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`)
}