// SCOPE: El scope o ámbito es desde dónde puedo acceder al valor de una variable y se define al declarar la variabla, existen varios tipos:

// Global: Se puede acceder en cualquier parte del archivo, se declara en cualquier parte del archivo pero fuera de cualquier función
// Local: Una variable es accesible dentro de la función, se declara dentro de la función y es accesible en cualquier parte dentro de la función.
// Bloque: Se declara dentro de un bloque de código encerrado por { }, puede ser en un condicional (if) o en un cliclo (for)

// En donde se crea o declara una variable define su scope, es decir define en donde esa variable funciona y puedo acceder a su valor.


// Scope con variables de tipo let y const, pueden tener scope global, local y bloque

let variableGlobalLet = '🌎' // Declaración y asignación de la variable global

// Impresión de variables a nivel Global
console.log(`Desd el archivo js - ${variableGlobalLet}`);   /* ✅ Si funciona porque la declaración existe */
console.log(`Desd el archivo js - ${variableLocalLet}`);    /* ❌ No funciona porque no se ha declarado aún */
console.log(`Desd el archivo js - ${variableBloqueLet}`);   /* ❌ No funciona porque no se ha declarado aún */
console.log('-------------')

function nombreFuncion() {
    let variableLocalLet = '🏠' // Declaración y asignación de la variable local

    // Impresión de variables a nivel Local
    console.log(`Desd la funcion js - ${variableGlobalLet}`);   /* ✅ Si funciona porque la declaración existe */
    console.log(`Desd la funcion js - ${variableLocalLet}`);    /* ✅ Si funciona porque la declaración existe */
    console.log(`Desd la funcion js - ${variableBloqueLet}`);   /* ❌ No funciona porque no se ha declarado aún */

    console.log('-------------')

    if (true) {
        let variableBloqueLet = '🌞' // Declaración y asignación de la variable bloque

        // Impresión de variables a nivel bloque
        console.log(`Desd el bloque condicional js - ${variableGlobalLet}`);    /* ✅ Si funciona porque la declaración existe */
        console.log(`Desd el bloque condicional js - ${variableLocalLet}`);     /* ✅ Si funciona porque la declaración existe */
        console.log(`Desd el bloque condicional js - ${variableBloqueLet}`);    /* ✅ Si funciona porque la declaración existe */
    }
}

nombreFuncion();

