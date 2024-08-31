import { fruits, vegetables, fastFood } from './array-base.js'

// 04 Array.concat(value);
// Se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

const fruitsWithPizza = fruits.concat('🍕')
const fruitsWithOthers = fruits.concat('🍔', '🍟', '🌭', '🍿')

const healthyFood = fruits.concat(vegetables);
const food = fruits.concat(vegetables, fastFood)

const lotsOfFood = fruits.concat('🍖', '🥩', '🍛', '🍤', vegetables, fastFood)

console.log(lotsOfFood)