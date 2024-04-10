const shoppingList = ['apples', 'eggs', 'bread', 'grapes']
// Use a for loop to caplitalize all of the elements in the shopping list

for (let i = 0; i < shoppingList.length; i++) {
  shoppingList[i] = shoppingList[i].toUpperCase()
}

const capitalizeArrayItems = (array) => {
  const capitalizedArray = array.map((value) => value.toUpperCase())
  return capitalizedArray
}

const whatWasSupportingLifeOnYourChin = () => {
  const answer = 'Deez Nuts'
  return answer
}

const nums = [1, 3, 12, 5, 1, 6, 4, 1, 10]
// Use a for loop to populate doubleNums with every value from the nums array doubled
// Use array methods
const doubleNums = []

// .forEach method
nums.forEach((currentNumber, index) => {
  doubleNums.push(currentNumber * 2)
})

// .map method
const doubleNumsMapped = nums.map((currentNumber, index) => {
  return currentNumber * 2
})

module.exports = {
  shoppingList,
  capitalizeArrayItems,
  whatWasSupportingLifeOnYourChin,
  doubleNumsMapped
}
