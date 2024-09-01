import { food } from './array-base.js';

// 01 array.forEach(callback);
// Ejecuta la funcion callback una vez por cada elemento del arreglo
const resultado = food.forEach((element) => {
    element = element + element;
    console.log(element);
});
console.log(resultado);
console.log(food);

// Array.forEach((element) => {
//     // code ...
// })
