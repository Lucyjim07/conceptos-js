import { foodObjects } from './array-base.js'

// 09. Array.some(callback);
// comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

const existSomeElement = foodObjects.some((element) => {
    return element.color === 'orange'
});
console.log(existSomeElement)

// Array.some((element) => {
//     // code ...
//     return // exists some element that meets a condition
// })