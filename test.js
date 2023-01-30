// const sum = require('./sum')

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1,2)).toBe(3)
// })

// const capitalise = require('./capitalise')

// test('capitalises the first letter of the string', () => {
//     expect(capitalise('string')).toBe('String')
// })

const reverse = require('./reverse')
test('reverses a string', () => {
    expect(reverse('pokemon')).toBe('nomekop')
})
