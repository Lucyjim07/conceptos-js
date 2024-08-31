import { foodObjects } from './array-base.js'

// 10. Array.every(callback);
// prueba si todos los elementos del arreglo pasan la condicion implementada por la función proporcionada. Devuelve un valor booleano.

let everyElementsMeetCondition = foodObjects.every((element) => {
    return element.type === 'fruits'
});
console.log(everyElementsMeetCondition)

const fruits = foodObjects.filter((element) => {
    return element.type === 'fruits'
})

everyElementsMeetCondition = fruits.every((element) => {
    return element.type === 'fruits'
});
console.log(everyElementsMeetCondition)

// Array.some((element) => {
//     // code ...
//     return // every element in the array meets the condition
// })