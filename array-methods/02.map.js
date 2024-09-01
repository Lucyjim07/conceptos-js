import { food } from './array-base.js';

// 02 array.map(callback);
// Crea un nuevo arreglo con los resultados de la llamada a la callback aplicada a cada uno de sus elementos

const eatFood = food.map((element) => `${element} + 🍽`);
console.log(eatFood);

const duplicateFood = food.map((element) => element + element + element);
console.log(duplicateFood);

// La función callback puede tener 3 parametros opcionales que son:
// function callback(currentValue, index, array)

// Array.map((element) => {
//     // code ...
//     return // new element
// })
