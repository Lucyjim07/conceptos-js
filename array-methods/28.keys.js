import { fruits } from './array-base.js';

// 28. array.keys()
// devuelve un nuevo objeto Array Iterator que contiene las claves para cada indice en el arreglo.

const fruitsKeys = fruits.keys();
console.log(fruitsKeys);

let item = fruitsKeys.next();

while (item.done === false) {
    console.log(item);
    item = fruitsKeys.next();
}

for (let key of fruitsKeys) {
    console.log(key);
}
