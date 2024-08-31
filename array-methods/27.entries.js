import { vegetables, foodObjects } from './array-base.js'

// 27. array.entries()
// retorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice del arreglo.

const vegetablesEntries = vegetables.entries()
console.log(vegetablesEntries)

for (let element of vegetablesEntries) {
    console.log(element)
}

const foodObjectsEntries = foodObjects.entries()
for (let element of foodObjectsEntries) {
    console.log(element)
}