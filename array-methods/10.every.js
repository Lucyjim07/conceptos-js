import { foodObjects } from './array-base.js';

// 10. array.every(callback);
// prueba si TODOS los elementos del arreglo pasan la condicion implementada por la función proporcionada. Devuelve un valor booleano.

let everyElementsMeetCondition = foodObjects.every((element) => {
    return element.type === 'fruit';
});
console.log(everyElementsMeetCondition);

/* --------------------------------- */

const fruits = foodObjects.filter((element) => {
    return element.type === 'fruit';
});

everyElementsMeetCondition = fruits.every((element) => {
    return element.name !== '' && element.color !== '';
});

console.log(everyElementsMeetCondition);

if (everyElementsMeetCondition === false) {
    const elementosFallidos = fruits.filter((element) => {
        return element.name === '' || element.color === '';
    });

    console.log(elementosFallidos);
}

// Array.some((element) => {
//     // code ...
//     return // every element in the array meets the condition
// })
