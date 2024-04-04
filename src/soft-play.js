// do not change these lines
const adults = 0
const children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
const numPeople = {
  adults: adults,
  children: children
}

function occupancy() {
  return numPeople
}

function enter(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  } else {
    numPeople.adults += numAdults
    numPeople.children += numChildren
    return true
  }
}

function leave(numAdults, numChildren) {
  if (numAdults === 0) {
    return false
  } else if (numPeople.adults - numAdults < numPeople.children - numChildren) {
    return false
  } else if (numChildren > numAdults) {
    return false
  } else if (numPeople.adults < numAdults || numPeople.children < numChildren) {
    return false
  } else {
    numPeople.adults -= numAdults
    numPeople.children -= numChildren
    return true
  }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
