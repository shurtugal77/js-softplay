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

const totalPeople = { ...numPeople }

function occupancy() {
  return numPeople
}

function enter(numAdults, numChildren) {
  if (numAdults < numChildren) {
    return false
  } else {
    numPeople.adults += numAdults
    numPeople.children += numChildren

    totalPeople.adults += numAdults
    totalPeople.children += numChildren
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

function total() {
  return totalPeople
}

// console.log(enter(5, 5))

// console.log(occupancy())

// console.log(leave(1, 1))
// console.log(occupancy())

// console.log(enter(100, 100))

// console.log(occupancy())
// console.log(total())

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
