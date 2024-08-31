import { fruits } from './array-base.js'

// 28. array.keys()
// devuelve un nuevo objeto Array Iterator que contiene las claves para cada indice en el arreglo.

const fruitsKeys = fruits.keys()
for (let key of fruitsKeys) {
    console.log(key)
}