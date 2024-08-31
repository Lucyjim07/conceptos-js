import { food } from './array-base.js'

// 18. Array.fill(element);
// 18. Array.fill(element, startIndex);
// 18. Array.fill(element, startIndex, endIndex);
// cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.

food.fill('🍌')
// food.fill('🍌', 2)
// food.fill('🍌', 2, 8)


console.log(food)