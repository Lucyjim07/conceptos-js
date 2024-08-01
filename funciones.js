// Los siguientes son ejemplos de funciones nombradas y declaración de funciones
// 1. Declarar la función y luego usarla, ejecutarla
// Function definition
function add(num1, num2) {
    return num1 + num2
}

const addResult = add(5, 10)
console.log(addResult)


// Function expression
// 2. Ejecutar la función y luego definirla
const subtractResult = subtract(7, 2);
console.log(subtractResult)

function subtract(num1, num2) {
    return num1 - num2
}

// Porque este caso funciona?
// Cuando el navegador carga los archivos javascript no los carga y los lee inmediatamente ya que es un lenguaje de scripting (lenguaje interpretado). Lo que sucede es que se hace una primera lectura de todo el javascript primero para entender todas las partes que están programadas. Luego el navegador lee el archivo una vez más y va ejecutando las sentencias una a una de arriba hacia abajo.

// Cuando se hizo la primera lectura, el navegador hace lo que se conoce como "Hoisting" que es conocer los contextos de ejecución de javascript (especificamente las fases de creación y ejecución). Las declaraciones de variables y funciones son asignadas en memoria durante la primera fase de lectura de los archivos javascript. (https://developer.mozilla.org/es/docs/Glossary/Hoisting)

// 3. Funciones anonimas
// Son funciones que no tienen nombre para poderlas ejecutar se debe hacer un autollamado en el momento de ejecución
(function () {
    console.log("x vale: ", x)
    var x = 10;
    console.log("x vale: ", x)
})();

(function (name) {
    console.log(`hello: ${name}`)
})('Lucy');


// Analizar como funciona la asignación de variables y el hoisting al momento de reservar espacio en memoria y asignar un valor (una función puede ser un valor)
// intercambiar var, const, let
var variable
console.log(variable)
variable = 5
console.log(variable)


// 4. Hoisting con un funciones
// Se pueden asignar funciones anónimas a variables y lo que hace el interprete es reservar espacio en memoria para las variables y luego intentará asignar el valor que en este caso es una función a la variable


// Los siguientes son ejemplos de funciones anomimas asignadas a una variabla y expresión de funciones
// 5. Declarar la función y luego usarla, ejecutarla
const add = function (num1, num2) {
    return num1 + num2
}

const addResultFunc = add(5, 10)
console.log(addResultFunc)


// 6. Ejecutar la función y luego definirla
const subtractResultFunc = subtract(7, 2);
console.log(subtractResultFunc)

const subtract = function (num1, num2) {
    return num1 - num2
}


// 7. Arrow Functions
// Se presentan como una ayuda o mejora en la sintaxis para escribir las funciones

// función tradicional (función anónima asignada a una variable)
let addOriginal = function (num1, num2) {
    return num1 + num2
}

// arrow function
let add = (num1, num2) => {
    return num1 + num2
}
console.log(add(5, 8))

// diferencias
// Se elimina la palabra recervada "function" y se agrega el simbolo igual(=) + mayor que(>) que representan una flecha (=>). De allí el nombre función flecha, este simbolo se agrega entre los parámetros de la función y el cuerpo de la función
// (...parámetros) => { ...cuerpo-de-función } 
// Si el cuerpo de la funcion solo tiene una sentencia que se va a retornar directamente, se puede eliminar la palabra reservada "return" quedando en una expresión más simple
let addSimple = (num1, num2) => num1 + num2
console.log(addSimple(2, 2))
// Si la cantidad de parametros de la arrow function es solo uno, se pueden eliminar los parentesis de la parte de la izquierda de la expresión
let sayHello = (name) => {return console.log(`Hello ${name}`)}
sayHello('Lucy')

// 8. Funciones como parámetros
// Se puede pasar una función como parámetro a otra función y dentro de ésta ejecutar su llamado
const operar = (num1, num2, operacion) => {
    return operacion(num1, num2)
}

const operacionSuma = (num1, num2) => num1 + num2;
const operacionResta = (num1, num2) => num1 - num2;
const operacionMultiplicacion = (num1, num2) => num1 * num2;

console.log(operar(5, 2, operacionSuma))
console.log(operar(5, 2, operacionResta))
console.log(operar(5, 2, operacionMultiplicacion))


// 9. callback
// Los callback son funciones que que se pasan por parámetro a otra función y se ejecutan después de hacer algo

function modify(array, callback) {
    // hacemos algo...
    array.push('Uriel')
    // después de hacer algo, llamar la función callback
    callback(array)

    // setTimeout(function () {
    //     callback(array)
    // }, 3000);
}

const angels = ['Miguel', 'Gabriel', 'Rafael']

modify(angels, function(array) {
    console.log(`he modificado el arreglo y ahora es de ${array.length} elementos`)
})

// un callback es una función que se pasa a otra como argumento y se ejecuta después de que se haya completado alguna cosa.
const names = ['Miguel', 'Gabriel', 'Rafael']
names.forEach(function (name) {
    console.log(name)
})


