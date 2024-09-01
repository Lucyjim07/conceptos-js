import { food } from './array-base.js';

// 08. array.lastIndexOf(element);
// 08. array.lastIndexOf(element, startIndex);
// devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara. El arreglo es recorrido en sentido contrario, empezando por el último elemento.

const arregloDuplicado = food.concat(food);
console.log(arregloDuplicado);

const bannanaIndex = arregloDuplicado.lastIndexOf('🍌');
console.log(bannanaIndex);

// Nota: solo funciona cuando se comparan tipos primitivos, ya que los objetos se comparan por referencia y no por valor
