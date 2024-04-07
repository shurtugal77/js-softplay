// names.js
// 1. Create a function that accepts two parameters: firstName, lastName
// The function should return an object with firstName and lastName properties

const getFullName = (firstName, lastName) => {
  const fullName = {
    firstName,
    lastName
  }
  return fullName
}

// 2. Export the function from the file
module.exports = {
  getFullName
}
