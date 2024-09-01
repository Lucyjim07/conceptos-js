import { months } from './array-base.js';

// 21. array.splice(startIndex)
// 21. array.splice(startIndex, deleteCount)
// 21. array.splice(startIndex, deleteCount, item1)
// 21. array.splice(startIndex, deleteCount, item1, item2, itemN)
// cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

const result = months.splice(0);
// const result = months.splice(0, 6);
// const result = months.splice(0, 1, 'January');
// const result = months.splice(0, 6, 'January', 'February', 'March', 'April');

console.log(result);
console.log(months);
