// Facilites
const facilitesAvailable = {
  ballPit: true,
  jungleGym: true,
  slides: true
}

const editFacilityAvailablity = (ballPit, jungleGym, slides) => {
  facilitesAvailable.ballPit = ballPit
  facilitesAvailable.jungleGym = jungleGym
  facilitesAvailable.slides = slides
  return facilitesAvailable
}

// module.exports = editFacilityAvailablity
// When assigning an object property's value using a variable/function -> just type the name once with a ",". No need for "key:value" structure

module.exports = {
  editFacilityAvailablity,
  facilitesAvailable
}
