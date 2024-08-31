import { foodObjects } from './array-base.js'

// 03 Array.filter(callbackFunction);
// Crea un nuevo arreglo con todos los elementos que cumplan la condición dada por la callback
const fruits = foodObjects.filter((element) => {
    // if (element.type === 'fruit') {
    //     return element
    // }

    return element.type === 'fruit'
})
console.log(fruits)


// Array.filter((element) => {
//     // code ...
//     return // element that meets a condition
// })