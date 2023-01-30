// const sum = require('./sum')

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1,2)).toBe(3)
// })

// const capitalise = require('./capitalise')

// test('capitalises the first letter of the string', () => {
//     expect(capitalise('string')).toBe('String')
// })

// const reverse = require('./reverse')
// test('reverses a string', () => {
//     expect(reverse('car')).toBe('rac')
// })

// const calculator = require ('./calculator')

// test('calcs the correct answer', () => {
//     expect(calculator.add(2,2)).toBe(4)
// })
// test('calcs the correct answer', () => {
//     expect(calculator.subtract(2,2)).toBe(0)
// })
// test('calcs the correct answer', () => {
//     expect(calculator.multiply(5,5)).toBe(25)
// })
// test('calcs the correct answer', () => {
//     expect(calculator.divide(10, 5)).toBe(2)
// })

const ceaserCifer = require ('./ceasarCipher')

test('cyphers with ceaser cipher', () => {
    expect(ceaserCifer('abc', 1)).toBe('bcd')
})
test('cyphers with ceaser cipher', () => {
    expect(ceaserCifer('z', -1)).toBe('y')
})