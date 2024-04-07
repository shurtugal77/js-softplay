// Import modules from capacity.js
const { currentCapacity, enter } = require('./capacity.js')

console.log(currentCapacity)
console.log(enter)

enter(1, 1)
enter(2, 2)

console.log(currentCapacity)

// const editDeezFacilites = require('./src/tools/facilites.js')
// console.log(editDeezFacilites(false, false, true))

const {
  editFacilityAvailablity,
  facilitesAvailable
} = require('./src/tools/facilites.js')

console.log(editFacilityAvailablity(false, false, true))
console.log(facilitesAvailable)
