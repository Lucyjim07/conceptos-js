import { foodObjects } from './array-base.js';

// 06 array.findIndex(callback);
// devuelve el índice del primer elemento de un array que cumpla con la función callback proporcionada. En caso de no encontrar un elemento que cumpla la condición devuelve -1.
const found = foodObjects.findIndex((element) => element.color === 'pink');
console.log(found);
console.log(foodObjects)


// Array.findIndex((element) => {
//     // code ...
//     return // first element that meets a condition
// })
