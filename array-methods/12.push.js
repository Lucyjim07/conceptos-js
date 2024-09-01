import { food, fastFood } from './array-base.js';

// 12. array.push(element);
// añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

console.log(food.length);
const newLength = food.push('🍉', '🥦', fastFood);
console.log(newLength, food);
