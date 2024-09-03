import { fruits } from './array-base.js';

// 26. array.valueOf()
// retorna el valor primitivo del objeto especificado. Copia el objeto.

const foodCopy = fruits;

foodCopy[0] = '🧛‍♂️';

console.log(fruits);
console.log(foodCopy);

console.log(fruits === foodCopy);
