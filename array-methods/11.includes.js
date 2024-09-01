import { food } from './array-base.js';

// 11. array.includes(value);
// 11. array.includes(value, fromIndex);
// determina si una arreglo incluye un determinado elemento, devuelve true o false según corresponda.

const hasPotato = food.includes('🥔');
console.log(hasPotato);

const hasOnion = food.includes('🧅');
console.log(hasOnion);

// Nota: solo funciona cuando se comparan tipos primitivos, ya que los objetos se comparan por referencia y no por valor
