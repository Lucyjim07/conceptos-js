import { food } from './array-base.mjs'

// 02 Array.map(callbackFunction);
// Crea un nuevo arreglo con los resultados de la llamada a la callback aplicada a cada uno de sus elementos
const eatFood = food.map((element) => {
    return `${element} + 🍽`
})
console.log(eatFood)

const duplicateFood = food.map((element) => {
    return element + element
})
console.log(duplicateFood)

// La función callback puede tener 3 parametros opcionales que son:
// function callback(currentValue, index, array)


// Array.map((element) => {
//     // code ...
//     return // new element
// })