// https://www.youtube.com/watch?v=3xYd9fJ_0Z8

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
// Una promesa (promise) es un objeto que representa la terminación o el fracaso de una operación asíncrona. 
// Una promesa (Promise) puede ser creada usando su constructor new Promise(function(resolve, reject)) { executor }
// Los argumentos resolve y reject con funciones callback proporcionadas por el mismo Javascript, el codigo de nuestro interes esta en la seccion del executor.  Cuando el codigo dentro del executor genera un resultado, sea tarde o temprano (un proceso asincrono) se debe llamar a alguno de los callback
// resolve(value) => si el trabajo finalizo exitosamente con el resultado value
// reject(error) => si un error a ocurrido, error es el objeto que contiene el detalle del error

const promesa = new Promise(function (resolveFn, rejectFn) {
    const exitoso = Math.random() < 0.5
    console.log(`Resultado random: ${exitoso}`)
    if (exitoso) {
        console.log(`Funcion resolve: exitoso -> ${typeof resolveFn}`)
        resolveFn("OK desde promesa")
        // setTimeout(() => resolveFn("OK desde promesa"), 2000)
    } else {
        console.log(`Funcion reject: fallido -> ${typeof rejectFn}`)
        rejectFn("Error desde promesa")
        // setTimeout(() => rejectFn("Error desde promesa"), 2000)
    }
})

promesa
    .then(function (resultado) { console.log(`Resultado exitoso: ${resultado}`); })
    .catch(function (error) { console.error(`Error: ${error}`) });




// Usando una funcion generadora para retornar una Promise

function generadora(parametros) {
    return new Promise(function (resolveFn, rejectFn) {
        console.log(`Resultado random: ${parametros}`)
        if (parametros) {
            console.log(`Funcion resolve: exitoso -> ${typeof resolveFn}`)
            resolveFn("OK desde promesa")
        } else {
            console.log(`Funcion reject: fallido -> ${typeof rejectFn}`)
            rejectFn("Error desde promesa")
        }
    })
}

const exito = Math.random() < 0.5

generadora(exito)
    .then(function (resultado) { console.log(`Resultado exitoso: ${resultado}`); })
    .catch(function (error) { console.error(`Error: ${error}`) });