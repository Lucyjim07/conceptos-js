// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// https://developer.mozilla.org/es/docs/Web/JavaScript/Closures

// Una closure es la combinación de una función agrupada dentro de otra funcion con referencia a su estado adyacente
// Es decir una closuere da acceso al scope de una funcion externa desde una función interna

// 1. Ejemplo de closure
// funcion externa
function init() {
    const name = "Mozilla";

    // funcion interna
    function displayName() {
        console.log(name);
    }

    // ejecucion de la funcion interna
    displayName();
}

// ejecucion de la funcion externa
init();


// Dentro de una closure, la funcion interna recuerda el ambiente (scope) o alcance en el que fue creada
// En el siguiente ejemplo se puede ver que la funcion externa sayHello declara una variable llamada name, la definicion de la funcion interna usa esa variable, pero nunca se ejecuta. La funcion externa retorna como resultado, la funcion interna

// funcion externa
function sayHello() {
    const name = "Lucy";

    // funcion interna
    const say = function () { console.log("Hello " + name) }
    return say;
}

// ejecucion de la funcion externa. La funcion externa sayHello retorna la funcion interna
var internalFunction = sayHello()
// por eso cuando se verifica el tipo de lo que retorno la funcion externa da function
console.log(typeof internalFunction)
// ejecucion de la funcion interna. Tiene acceso a la variable name que en este momento ya no existe, pero que la funcion interna recuerda de cuando se creo
internalFunction();






/* --------------------------------- */
// Ejemplo adicional de Clousure

// función externa
function crearContador() {
    let contador = 0;

    // función interna con acceso a la variable contador
    return function incrementar() {
        contador = contador + 1;
        return contador;
    }
}

// inicialización de una variable con lo que retorne la función crearContador()
const contador1 = crearContador();
console.log(contador1())
console.log(contador1())
console.log(contador1())

const contador2 = crearContador();



// ejemplo avanzado
// retorna un objeto con propiedades que son a su vez funciones
function fabricarContador(contador = 0) {
    return {
        incrementar: function () {
            contador = contador + 1;
            return contador;
        },
        decrementar: function () {
            contador = contador - 1;
            return contador;
        },
        obtenerValor: function () {
            return contador;
        }
    }
}

const contadorA = fabricarContador(10);
const contadorB = fabricarContador(500);
const contadorC = fabricarContador();





// Creación de mensajes con clausuras.
function error(str) {
    console.log(`%c Error: ${str}`, 'background: red;color: white;')
}

function crearImpresoraDeMensajes(tipo, estilos) {
    return function mensaje(str) {
        console.log(`%c ${tipo}: ${str}`, estilos)
    }
}

const error = crearImpresoraDeMensajes('Error', 'background: red;color: white');
const warning = crearImpresoraDeMensajes('Warning', 'background: orange; color white');
const exito = crearImpresoraDeMensajes('Exito', 'background: green; color: white');
