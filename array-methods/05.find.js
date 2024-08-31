import { foodObjects } from './array-base.js'

// 05 Array.find(callbackFunction);
// devuelve el valor del primer elemento del arreglo que cumple la condición de la callback proporcionada.
const found = foodObjects.find((element) => {
    return element.color === 'yellow'
});
console.log(found)


// Array.find((element) => {
//     // code ...
//     return // first element that meets a condition
// })