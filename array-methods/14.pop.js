import { food, foodObjects } from './array-base.js';

// 14. array.pop();
// elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

const removedItem = foodObjects.pop();
console.log(removedItem, foodObjects);
