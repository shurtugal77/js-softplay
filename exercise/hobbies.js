// hobbies.js
// 1. Create a function that accepts three parameters: hobbyOne, hobbyTwo, hobbyThree
// The function should return an object with a hobbies property, which is an array of hobbies

const getHobbies = (hobbyOne, hobbyTwo, hobbyThree) => {
  hobbiesObj = {
    hobbiesArray: [hobbyOne, hobbyTwo, hobbyThree]
  }
  return hobbiesObj
}

// 2. Export the function from the file
module.exports = {
  getHobbies
}
