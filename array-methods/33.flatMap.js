import { fruits, vegetables } from './array-base.js';

// 33. array.flatMap(callback)
// primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en un nuevo arreglo. Es idéntico a un map seguido de un flat de profundidad 1, pero flatMap es a menudo útil y la fusión de ambos en un método es ligeramente más eficiente.

const fruitsArray = fruits.slice(0, 2);
const vegetablesArray = vegetables.slice(0, 2);

const arrayOfFood = [[...fruitsArray], [...vegetablesArray]];

const resultMap = arrayOfFood.map((array) => {
    return [`${array[0]} + ${array[1]}`];
});

const resultFlat = resultMap.flat();

console.log(resultFlat);

const resultFlatMap = arrayOfFood.flatMap((array) => {
    return [`${array[0]} + ${array[1]}`];
});

console.log(resultFlatMap);
