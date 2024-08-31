import { food } from './array-base.js'

// 19. Array.copyWithin(targetIndex);
// 19. Array.copyWithin(targetIndex, startIndex);
// 19. Array.copyWithin(targetIndex, startIndex, endIndex);
// transfiere una copia plana de una sección a otra dentro del mismo array, sin modificar su propiedad length y lo devuelve.

console.log(food)
food.copyWithin(2)
// food.copyWithin(2, 4)
// food.copyWithin(2, 4, 6)


console.log(food)