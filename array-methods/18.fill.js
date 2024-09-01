import { food } from './array-base.js';

// 18. array.fill(element);
// 18. array.fill(element, startIndex);
// 18. array.fill(element, startIndex, endIndex);
// cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.

const resultado = food.fill('🍌');
// food.fill('🍌', 2)
// food.fill('🍌', 2, 8)

console.log(resultado === food);

console.log(resultado, 'Este es el resultado de usar fill', food);
