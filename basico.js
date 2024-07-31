// Tipos de datos en javascript
// https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures

// JavaScript es un lenguaje débilmente tipado y dinámico. Las variables en JavaScript no están asociadas directamente con ningún tipo de valor en particular, y a cualquier variable se le puede asignar (y reasignar) valores de todos los tipos:

// lenguaje dinámico: permite cambiar los tipos de las variables en tiempo de ejecución
// lenguaje débilmente tipado: al crear una variable no le indicamos de que tipo va a ser esa variable. Javascript lo resuelve por nosotros

let foo = 42; // foo ahora es un número
foo = "bar"; // foo ahora es un string
foo = true; // foo ahora es un booleano

// El último estándar ECMAScript define nueve tipos:
// Seis tipos de primitivos
// 1. 
let sinDefinir //undefined
console.log(typeof sinDefinir)

// 2. 
const verdadero = true // boolean
console.log(typeof verdadero)

// 3.
const edad = 25 // number
console.log(typeof edad)

// 4.
const nombre = 'Lucy' // string
console.log(typeof nombre)

// 5.
const numeroGrande = 2n // bigint
console.log(typeof numeroGrande)
console.log(numeroGrande)

// 6.
const symbol = Symbol() // symbol
console.log(typeof Symbol())

// 7. Null también es un primitivo pero especial, ya que cuando se revisa su tipo de dato, el resultado da object, pero eso es por un error que existe en el código, así que Null es simplemente null
const nulo = null // null
console.log(typeof nulo)

// 8. Object
// En Javascript, los objetos pueden ser vistos como una colección de propiedades, estas propiedades son equivalentes a un par llave-valor (key-value). La llave de la propiedad puede ser un string o un symbol. Otros tipos como los numeros son usados para indexar los objetos. En cuanto al valor pueden ser de cualquier tipo, incluyendo otros objetos, lo que permiten crear estructuras más complejas

// los objetos pueden ser:
// a. Dates
// b. Colecciones indexadas (Indexed collections): Arrays y Typed Arrays
// c. Colecciones referenciadas por llaves: (Keyed collections): Maps, Sets, WeakMaps, WeakSets
// d. Objeto en general
console.log(typeof {})
console.log(typeof [])
console.log(typeof new Set())
console.log(typeof new Map())
console.log(typeof new WeakSet())
console.log(typeof new WeakMap())
console.log(typeof new Date())
console.log(typeof new Set())
console.log(typeof new Object())

// 9. Functions
// Es una estructura sin datos cuyo objetivo es agrupar un conjunto de pasos o lógica con el fin de ser reutilizado. Es un objeto especial
console.log(typeof function() {})


// Diferencias entre tipos primitivos y tipos objetos
// 1. Los primitivos se pasan por valor y los objetos se pasan por referencia
// 2. Los primitivos son inmutables. no se puede mutar (cambiar) su valor. Para modificarlo hay que hacer una nueva copia de su valor. Por ejemplo el valor true no lo puedo cambiar, siempre será true
// 3. Los primitivos también se compara por su valor
console.log("1" === "1")
console.log(true === true)
// 4. Los objetos se comparan por referencia, por eso es que al comparar dos objetos vacío, también se comparan sus referencias
console.log(({} === {}))