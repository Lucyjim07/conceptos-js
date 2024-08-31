import { fruits } from './array-base.js'

// 28. array.values()
// devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice del array.

const fruitsValues = fruits.values()
for (let value of fruitsValues) {
    console.log(value)
}