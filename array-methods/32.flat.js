
// 32. array.flat()
// 32. array.flat(depth)
// crea un nuevo arreglo con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

const numbers = [1, 2, 3, [4, [5, [6]]]]

// const flattenedArray = numbers.flat()
// const flattenedArray = numbers.flat(1)
// const flattenedArray = numbers.flat(2)
// const flattenedArray = numbers.flat(3)
const flattenedArray = numbers.flat(4)


console.log(flattenedArray)

