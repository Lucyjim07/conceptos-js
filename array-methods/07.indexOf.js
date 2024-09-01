import { food } from './array-base.js';

// 07. array.indexOf(element);
// 07. array.indexOf(element, startIndex);
// retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
const bannanaIndex = food.indexOf('🍌', 8);
console.log(bannanaIndex);

// Nota: solo funciona cuando se comparan tipos primitivos, ya que los objetos se comparan por referencia y no por valor
