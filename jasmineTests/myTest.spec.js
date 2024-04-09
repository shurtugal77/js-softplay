const {
  shoppingList,
  capitalizeArrayItems,
  whatWasSupportingLifeOnYourChin
} = require('./myCodeToTest.js')

describe('My code to test:', () => {
  it('shoppingList should contain all times in capital letters', () => {
    expect(shoppingList).toEqual(['APPLES', 'EGGS', 'BREAD', 'GRAPES'])
  })

  it('capitalizeArrayItems() will capitalize all items in the array passed into it', () => {
    // GIVEN
    const stuffToBuy = ['shirt', 'shorts', 'vest', 'jeans']

    // WHEN
    const result = capitalizeArrayItems(stuffToBuy)

    // THEN
    const expectedResult = ['SHIRT', 'SHORTS', 'VEST', 'JEANS']
    expect(result).toEqual(expectedResult)
  })

  it('If asked what was supporting life on your chin? You already know the answer.', () => {
    // GIVEN
    let answer = ''

    // WHEN
    answer = whatWasSupportingLifeOnYourChin()

    // THEN
    expect(answer).toEqual('Deez Nuts')
  })
})
