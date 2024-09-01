import { food, fastFood } from './array-base.js';

// 13. array.unshift(element);
// agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

const newLength = food.unshift('🍉', '🥦', fastFood);
console.log(newLength, food);
