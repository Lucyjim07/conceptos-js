import { foodObjects } from './array-base.js'

// 06 Array.findIndex(callbackFunction);
// devuelve el índice del primer elemento de un array que cumpla con la función callback proporcionada. En caso contrario devuelve -1.
const found = foodObjects.findIndex((element) => {
    return element.color === 'yellow'
});
console.log(found)


// Array.findIndex((element) => {
//     // code ...
//     return // first element that meets a condition
// })