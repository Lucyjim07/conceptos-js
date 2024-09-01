import { food, foodObjects } from './array-base.js';

// 17. array.join(separator);
// une todos los elementos de una arreglo en una cadena y devuelve esta cadena, teniendo en cuenta un elemento separador.

// si no se pasa el separador, funciona igual que toString() y separa por comas
let stringFood = food.join();
console.log(stringFood);

stringFood = food.join(true);
console.log(stringFood);

stringFood = food.join(' + ');
console.log(stringFood);

stringFood = food.join('');
console.log(stringFood);

// Nota: solo funciona cuando se usa en tipos primitivos, ya que los objetos no se pueden convertir en strings
