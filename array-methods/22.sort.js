import { months, numbers } from './array-base.js'

// 22. array.sort()
// ordena los elementos de un arreglo y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.

months.sort()
numbers.sort()

console.log(months)


// Para ordenar una lista de números, se utiliza una callback que determine el ordenamiento de la siguiente manera
// (a, b) => { return a - b}
// si la resta da como resultado > 0: ordena a después b
// si la resta da como resultado < 0: ordena a antes b
// si la resta da como resultado ===: mantiene el orden original de a y b

// ordenado en forma asendente
// numbers.sort((a, b) => { return a - b });
// console.log(numbers)

// ordenado en forma descendente
// numbers.sort((a, b) => { return b - a });
// console.log(numbers)