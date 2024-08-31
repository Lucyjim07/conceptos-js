import { food, foodObjects } from './array-base.js'

// 17. Array.join(separator);
// une todos los elementos de una arreglo en una cadena y devuelve esta cadena, teniendo en cuenta un elemento separador.

// si no se pasa el separador, funciona igual que toString() y separa por comas
let stringFood = food.join()
console.log(stringFood)

stringFood = food.join(', ')
console.log(stringFood)

stringFood = food.join(' + ')
console.log(stringFood)

stringFood = food.join('')
console.log(stringFood)