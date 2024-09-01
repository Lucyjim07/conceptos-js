import { food } from './array-base.js';

// 15. array.shift();
// elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

const removedItem = food.shift();
console.log(removedItem, food);
