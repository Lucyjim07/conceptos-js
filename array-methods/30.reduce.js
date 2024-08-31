import { orderedNumbers, food } from './array-base.js'

// 30. array.reduce(callback)
// 30. array.reduce(callback, initialValue)
// ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

// la funcion reductora se forma de la siguiente manera
function reducerFunctionName(previousValue, currentValue) {
    /* code goes here */
    return /* value */
}

function reducer(previousValue, currentValue) {
    return previousValue + currentValue;
}

const sumArray = orderedNumbers.reduce(reducer);
console.log(sumArray)