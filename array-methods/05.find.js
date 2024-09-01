import { foodObjects } from './array-base.js';

// 05 array.find(callback);
// devuelve el valor del primer elemento del arreglo que cumple la condición de la callback proporcionada.
const found = foodObjects.find((element) => element.color === 'pink');
console.log(found);
console.log(foodObjects)

// Array.find((element) => {
//     // code ...
//     return // first element that meets a condition
// })
