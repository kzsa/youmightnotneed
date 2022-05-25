const slice = (arr, start, end) => [...arr.slice(start, end)]

exports.array = slice([1, 2, 3, 4], 2, 6)
// => [ 3, 4 ]

const array = []
array[6] = 6
array[9] = 9

exports.undefined = slice(array, 2, 6)
// => [ undefined, undefined, undefined, undefined ]
