// Softplay
// Capacity
const currentCapacity = {
  adults: 0,
  children: 0
}

const enter = (adults, children) => {
  if (adults) {
    currentCapacity.adults += adults
  }
  if (children) {
    currentCapacity.children += children
  }
}

// Export necessary functions and variables we want to use in other files
module.exports = {
  currentCapacity: currentCapacity,
  enter: enter
}
