import { food } from './array-base.js'

// 12. Array.push(element);
// añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

const newLength = food.push('🍉', '🥦')
console.log(newLength, food)