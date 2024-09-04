// Tipos de datos en javascript
// https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures

// JavaScript es un lenguaje débilmente tipado y dinámico. Las variables en JavaScript no están asociadas directamente con ningún tipo de valor en particular, y a cualquier variable se le puede asignar (y reasignar) valores de todos los tipos:

// lenguaje dinámico: permite cambiar los tipos de las variables en tiempo de ejecución
// lenguaje débilmente tipado: al crear una variable no le indicamos de que tipo va a ser esa variable. Javascript lo resuelve por nosotros

let foo = 42; // foo ahora es un número
foo = 'bar'; // foo ahora es un string
foo = true; // foo ahora es un booleano

// El último estándar ECMAScript define nueve tipos de datos:
// Seis tipos de primitivos
// 1.
let a; //undefined
console.log(typeof a);

// 2.
const verdadero = true; // boolean
console.log(typeof verdadero);

// 3.
const edad = 25; // number
console.log(typeof edad);

// 4.
const nombre = 'Lucy'; // string
console.log(typeof nombre);

// 5.
const numeroGrande = 2n; // bigint
console.log(typeof numeroGrande);
console.log(numeroGrande);

// 6.
const varSymbol = Symbol(1); // symbol
console.log(typeof varSymbol);
console.log(varSymbol);

// 7. Null también es un primitivo pero especial, ya que cuando se revisa su tipo de dato, el resultado da object, pero eso es por un error que existe en el código, así que Null es simplemente null
const nulo = null; // null
console.log(typeof nulo);

// 8. Object
// En Javascript, los objetos pueden ser vistos como una colección de propiedades, estas propiedades son equivalentes a un par llave-valor (key-value). La llave de la propiedad puede ser un string o un symbol. Otros tipos como los numeros son usados para indexar los objetos. En cuanto al valor pueden ser de cualquier tipo de dato, incluyendo otros objetos, lo que permiten crear estructuras más complejas

// los objetos pueden ser:
// a. Dates
// b. Colecciones indexadas (Indexed collections): Arrays y Typed Arrays
// c. Colecciones referenciadas por llaves: (Keyed collections): Maps, Sets, WeakMaps, WeakSets
// d. Objeto en general
console.log(typeof {});
console.log(typeof []);
console.log(typeof new Set());
console.log(typeof new Map());
console.log(typeof new WeakSet());
console.log(typeof new WeakMap());
console.log(typeof new Date());
console.log(typeof new Object());

// las propiedades son una convinacion de llave valor
// llave (number, string, Symbol) / valor (un primitivo u otro objeto)

const arregloNumeros = ['🍎', '🥝', '🍌'];
console.log(arregloNumeros[1]);

const perfil = {
    name: 'Lucy',
    address: {
        country: 'Colombia',
        state: 'Pasto',
        street: 'Mz F casa 5',
    },
    salary: 3n,
    job: false,
    location: {
        longitud: null,
        latitude: null,
    },
};
console.log(perfil.location?.longitud);

// Los objetos en general pueden ser estructuras que nos ayudan a guardar y organizar información.

const user = {
    name: 'Jon',
    lastname: 'Doe',
    age: 30,
    address: {
        country: 'Colombia',
        city: 'Pasto',
        street: 'La Merced',
    },
    friends: ['Brandon', 'Elena'],
    active: true,
    sendMail: function () {
        return 'sending mail...';
    },
};

// Para acceder a los valores de el objeto se utiliza la notación punto (.) la cual indica que con el nombre del objeto seguido de un punto se tienen acceso a las propiedades de ese objeto

console.log(user.name);
console.log(user.address.city);

// Si no sabemos si existe o no una propiedad se puede usar la notación interrogante (?) para verificar si la propiedad existe

console.log(user.credentials.password);
// console.log(user.credentials?.password)

// Destructuracion de un objeto
// Existe una forma más fácil de acceder a las propiedades de un objeto y es mediante la extracción de esas propiedades usando destructuración. Por ejemplo, del objeto user solo nos interesa su name y su lastname, podemos crear variables que contengan esos valores mediante la notación de llaves {}

const user = {
    name: 'Jon',
    lastname: 'Doe',
    age: 30,
    address: {
        country: 'Colombia',
        city: 'Pasto',
        street: 'La Merced',
    },
    friends: ['Brandon', 'Elena'],
    active: true,
};

const { name, lastname } = user;
console.log(name);
console.log(lastname);

// 9. Functions
// Es una estructura sin datos cuyo objetivo es agrupar un conjunto de pasos o lógica con el fin de ser reutilizado. Es un objeto especial
console.log(typeof function () {});

// Diferencias entre tipos primitivos y tipos objetos
// 1. Los primitivos se pasan por valor y los objetos se pasan por referencia
// 2. Los primitivos son inmutables. no se puede mutar (cambiar) su valor. Para modificarlo hay que hacer una nueva copia de su valor. Por ejemplo el valor true no lo puedo cambiar, siempre será true
// 3. Los primitivos también se compara por su valor
console.log('1' === '1');
console.log(true === true);
console.log(null === null);
console.log(typeof null);
// 4. Los objetos se comparan por referencia, por eso es que al comparar dos objetos vacío, también se comparan sus referencias
console.log({ nombre: 'Lucy' } === { nombre: 'Lucy' });

const profile = { nombre: 'Lucy' };
let copia = profile;

console.log(profile === copia);
copia.nombre = 'Oscar';

console.log(profile, copia);

const nombreLucy = 'Lucy';
let copiaNombre = nombreLucy;

console.log(nombreLucy + ' ' + copiaNombre);

copiaNombre = 'Oscar';
console.log(nombreLucy + ' ' + copiaNombre);
