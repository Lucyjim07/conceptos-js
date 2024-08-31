import { food } from './array-base.js'

// 13. Array.unshift(element);
// agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

const newLength = food.unshift('🍉', '🥦')
console.log(newLength, food)