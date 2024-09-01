import { food, foodObjects } from './array-base.js';

// 16. array.toString();
// devuelve una cadena de caracteres representando el array especificado y sus elementos separados por coma (,).

const stringFood = foodObjects.toString();
console.log(stringFood);
console.log(foodObjects);

// Nota: solo funciona cuando se usa en tipos primitivos, ya que los objetos no se pueden convertir en strings
