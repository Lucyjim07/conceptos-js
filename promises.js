// https://www.youtube.com/watch?v=3xYd9fJ_0Z8

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
// Una promesa (promise) es un objeto que representa la terminación o el fracaso de una operación asíncrona.
// Una promesa (Promise) puede ser creada usando su constructor new Promise(function(resolve, reject)) { executor }
// Los argumentos resolve y reject son funciones callback proporcionadas por el mismo Javascript, el codigo de nuestro interes esta en la seccion del executor.  Cuando el codigo dentro del executor genera un resultado, sea tarde o temprano (un proceso asincrono) se debe llamar a alguno de los callback
// resolve(value) => si el trabajo finalizó exitosamente con el resultado value
// reject(error) => si un error a ocurrido, error es el objeto que contiene el detalle del error

const promesa = new Promise(function (resolveFn, rejectFn) {
    const exitoso = Math.random() < 0.5;
    console.log(`Resultado random: ${exitoso}`);
    if (exitoso) {
        console.log(`Funcion resolve: exitoso -> ${typeof resolveFn}`);
        resolveFn("OK desde promesa");
        // setTimeout(() => resolveFn("OK desde promesa"), 2000)
    } else {
        console.log(`Funcion reject: fallido -> ${typeof rejectFn}`);
        rejectFn("Error desde promesa");
        // setTimeout(() => rejectFn("Error desde promesa"), 2000)
    }
});

// El objeto Promise funciona como una unión entre el resultado del código ejecutado en el executor (código dentro de la promesa) y las funciones consumidoras de ese resultado o error, dependiendo de que retorna la promesa. Las funciones consumidoras pueden ser registradas o relacionadas con el resultado generado a traves de los métodos .then y .catch

// El método .then puede recibir 2 argumentos.
// - El primero es una función que se ejecuta cuando se resuelve la promesa y recibe el resultdo
// - El segundo es una función que se ejecuta cuando se rechaza la promesa y recibe un error
// los argumentos del método .then son opcionales y se pueden presentar los siguientes casos
// - .then(f, g), en donde f y g son funciones. Se están pasando funciones para controlar el resolve y el reject
// - .then(f, null) o .then(f) en donde solo se pasa una función para controlar si la promesa se resolvió
// - .then(null, g) en donde solo se pasa una función para controlar si la promesa se rechazó. Para este caso en donde se está interesado en el error, también se puede usar otro método que es el .catch(g)

promesa.then(
    function (resultado) {
        console.log(`Resultado exitoso: ${resultado}`);
    },
    function (error) {
        console.error(`Error: ${error}`);
    }
);

// const funcionSiExito = function(resultado) { console.log(`Resultado exitoso: ${resultado}`); }
// const funcionSiError = function (error) { console.error(`Error: ${error}`) }
// promesa.then(funcionSiExito, funcionSiError)
// promesa.then(funcionSiExito, null)
// promesa.then(null, funcionSiError)

// promesa
//     .then(function (resultado) { console.log(`Resultado exitoso: ${resultado}`); })
//     .catch(function (error) { console.error(`Error: ${error}`) });

// ------------------------------------------------------
// Usando una funcion generadora para retornar una Promise

function generadora(parametros) {
    return new Promise(function (resolveFn, rejectFn) {
        console.log(`Resultado random: ${parametros}`);
        if (parametros) {
            console.log(`Funcion resolve: exitoso -> ${typeof resolveFn}`);
            resolveFn("OK desde promesa");
        } else {
            console.log(`Funcion reject: fallido -> ${typeof rejectFn}`);
            rejectFn("Error desde promesa");
        }
    });
}

const exito = Math.random() < 0.5;

generadora(exito)
    .then(function (resultado) {
        console.log(`Resultado exitoso: ${resultado}`);
    })
    .catch(function (error) {
        console.error(`Error: ${error}`);
    });

// Finalmente se puede reemplazar la sintaxis para la creación de las funciones y pasar de funciones definidas a funciones en forma de expresion

// 1. Promesa como variable
const otraPromesa = new Promise((resolveFn, rejectFn) => {
    const exitoso = Math.random() < 0.5;
    console.log(`Resultado random: ${exitoso}`);
    if (exitoso) {
        console.log(`Funcion resolve: exitoso -> ${typeof resolveFn}`);
        resolveFn("OK desde promesa");
        // setTimeout(() => resolveFn("OK desde promesa"), 2000)
    } else {
        console.log(`Funcion reject: fallido -> ${typeof rejectFn}`);
        rejectFn("Error desde promesa");
        // setTimeout(() => rejectFn("Error desde promesa"), 2000)
    }
});

otraPromesa
    .then((resultado) => console.log(`Resultado exitoso: ${resultado}`))
    .catch((error) => console.error(`Error: ${error}`));

// 2. Promesa dentro de funcion generadora
const generadoraExpresion = (parametros) => {
    return new Promise((resolveFn, rejectFn) => {
        console.log(`Resultado random: ${parametros}`);
        if (parametros) {
            console.log(`Funcion resolve: exitoso -> ${typeof resolveFn}`);
            resolveFn("OK desde promesa");
        } else {
            console.log(`Funcion reject: fallido -> ${typeof rejectFn}`);
            rejectFn("Error desde promesa");
        }
    });
};

const parametroAleatorio = Math.random() < 0.5;

generadoraExpresion(parametroAleatorio)
    .then((resultado) => console.log(`Resultado exitoso: ${resultado}`))
    .catch((error) => console.error(`Error: ${error}`));

// async - await

const generadoraExpresionAsync = (parametros) => {
    return new Promise((resolveFn, rejectFn) => {
        console.log(`Resultado random: ${parametros}`);
        if (parametros) {
            console.log(`Funcion resolve: exitoso -> ${typeof resolveFn}`);
            resolveFn("OK desde promesa");
        } else {
            console.log(`Funcion reject: fallido -> ${typeof rejectFn}`);
            rejectFn("Error desde promesa");
        }
    });
};

// const parametroAleatorioAsync = Math.random() < 0.5;

// const funcionAsincrona = async () => {
//     var promesa = generadoraExpresionAsync(parametroAleatorioAsync);
//     try {
//         await promesa;
//     } catch (error) {
//         console.error(`Error en catch: ${error}`);
//     }
// };

// funcionAsincrona();

const ejecutarFuncionAsync = async () => {
    try {
        const promesa = generadoraExpresionAsync(false);
        const resultado = await promesa;
        console.log('Desde funcion async ', resultado);        
    } catch (error) {
        console.log('Desde funcion async ', error)
    }
};

ejecutarFuncionAsync()
