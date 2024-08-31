import { orderedNumbers, food } from './array-base.js'

// 31. array.reduceRight(callback)
// 31. array.reduceRight(callback, initialValue)
// ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor. Esta vez se empieza desde el final del arreglo e itera hasta la pocisión inicial

// la funcion reductora se forma de la siguiente manera
function reducerFunctionName(previousValue, currentValue) {
    /* code goes here */
    return /* value */
}

function reducer(previousValue, currentValue) {
    return previousValue + currentValue;
}

const sumArray = orderedNumbers.reduceRight(reducer);
console.log(sumArray)