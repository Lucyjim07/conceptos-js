import { food } from './array-base.js'

// 20. Array.slice();
// 20. Array.slice(startIndex);
// 20. Array.slice(startIndex, endIndex);
// devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

const foodCompleteSlice = food.slice()
const foodIndexToEndSlice = food.slice(2)
const foodPartSlice = food.slice(2, 6)

console.log(food)
console.log(foodCompleteSlice)
console.log(foodIndexToEndSlice)
console.log(foodPartSlice)