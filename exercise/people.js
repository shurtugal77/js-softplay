// people.js
// 1. Import your function from names.js
const { getFullName } = require('./names.js')

// 2. Import your function from hobbies.js
const { getHobbies } = require('./hobbies.js')

// 3. Create a function that has no parameters
// The function should return an object with three properties: firstName, lastName, hobbies
// Inside your function, use your previous two functions to construct the object
const getNameAndHobbies = () => {
  const { firstName, lastName } = getFullName('Robert', 'Hohenester')
  const { hobbiesArray } = getHobbies('Diese', 'Nüsse', '69')

  myPerson = {
    firstName,
    lastName,
    hobbies: hobbiesArray
  }
  return myPerson
}

console.log(getNameAndHobbies())
