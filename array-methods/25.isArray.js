// 25 Array.isArray(value)
// determina si el valor pasado es un Array.

import { objetoDesconocido } from './array-base.js';

if (Array.isArray(objetoDesconocido)) {
    const resultado = objetoDesconocido.map((alimento) => alimento + '.');
    console.log(resultado);
} else {
    console.log('No puedo operar sobre un objeto que no sea un arreglo');
}

console.log(Array.isArray(objetoDesconocido));
console.log(Array.isArray('Hola mundo'));
console.log(Array.isArray({ id: 1 }));
console.log(Array.isArray(undefined));
