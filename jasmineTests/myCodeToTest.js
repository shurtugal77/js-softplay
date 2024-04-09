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

module.exports = {
  shoppingList,
  capitalizeArrayItems,
  whatWasSupportingLifeOnYourChin
}

// STOP 01:34:07
