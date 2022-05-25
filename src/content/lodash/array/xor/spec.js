const expected = [1, 4, 3, 6]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('xor', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})