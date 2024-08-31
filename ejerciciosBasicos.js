// OPERACIONES ARITMÉTICAS
// Adición
const resultadoSuma = 20 + 10;
console.log(resultadoSuma);

// Resta
const resultadoResta = 20 - 10;
console.log(resultadoResta);

// Multiplicación
const resultadoMultiplicacion = 2 * 3;
console.log(resultadoMultiplicacion);

// División
const resultadoDivision = 10 / 6;
console.log(resultadoDivision);

// Incremento (Suma 1 a un número)
let numeroIncremento = 2;
numeroIncremento++;
console.log(numeroIncremento);

// Decremento (Resta 1 a un número)
let numeroDecremento = 5;
numeroDecremento--;
console.log(numeroDecremento);

// Exponente (Muestra el resultado de elevar el primero operando a la potencia del segundo operando)
const resultadoExponente = 2 ** 3; // 2 elevado a la 4
console.log(resultadoExponente);

// Resto (Muestra el resto que queda cuando el primero operador se divide por el segundo)
const resultadoResto = 12 % 5;
console.log(resultadoResto);

// importante para saber si un número es par o impar
// al dividirlo entre 2 el resto debe ser 0 = par
// al dividirlo entre 2 el resto no es 0 = impar

//   12  | 5
// - 10    2
//   --
//    2

// OPERACIONES DE ASIGNACIÓN MATEMÁTICOS
// Asignación de adición
let valorAdicion = 10;
valorAdicion += 2;
valorAdicion += 2;
valorAdicion += 2;
valorAdicion += 2;
console.log(valorAdicion);

// Asignación de resta
let valorResta = 8;
valorResta -= 2;
console.log(valorResta);

// Asignación de multiplicación
let valorMultiplicacion = 5;
valorMultiplicacion *= 3;
console.log(valorMultiplicacion);

// Asignación de división
let valorDivision = 100;
valorDivision /= 2;
console.log(valorDivision);

// Asignación de exponente
let valorExponente = 2;
valorExponente **= 4;
console.log(valorExponente);

// Asignación restante
let valorResto = 12;
valorResto %= 5;
console.log(valorResto);




// BOOLEANOS
// Todos los valores en javascript son true o false implícitamente, es decir, los valores, los primitivos u objetos se pueden convertir a tipo booleano

console.log(Boolean())

const esActivo = null
if (esActivo)
{
    console.log('Esta activo')
} 
else 
{
    console.log('No esta activo')
}


// Los valores que generan false incluyen:
// 0
// null
// undefined
// NaN (Not a number)
// "" (Una cadena vacía)
// false

console.log(Boolean(/* valor */));

// todos los demás valores generan un true, incluido los números, las cadenas de texto que no estén vacías, los objetos, los arreglos y las funciones

console.log(Boolean("false"));

// OPERADORES DE COMPARACIÓN
// Los operadores de comparación comparan los valores de dos operandos y evalúan si la declaración que forman es true o false.

console.log(2 + 2 === 4);

// Coerción e igualdad de tipos
// Dos de los operadores de comparación más usados son == para la igualdad baja y === para la igualdad estricta. == realiza una comparación general entre dos valores mediante la coerción de los operandos para que coincidan con los tipos de datos, si es posible.
// Coerción: Conversión automática de un tipo de dato a otro tipo de dato cuando se utilizan operaciones o comparaciones entre valores de diferente tipo


const valor1 = "10" // string
const valor2 = 10   // number

console.log(valor1 == valor2)

// operaciones + - * /
// comparaciones igual, diferente, mayor que, menor que, mayor o igual que, menor o igual que

console.log(2 == 2);
console.log(2 == "2");

console.log(2 != 3);
console.log(2 != "2"); 

// Las comparaciones estrictas con === o !== no realizan la coerción de tipos. Para que una comparación estricta evalúe como true, los valores que se comparen deben tener el mismo tipo de datos.

console.log(2 === 3); // false
console.log(2 === "2"); // false

// Operador     	Descripción     	        Uso     	Resultado
// ===	            Estrictamente igual	        2 === 2	    verdadero
// !==	            No estrictamente igual	    2 !== "2"	verdadero
// ==	            Igual (o "inigualable")	    2 == "2"	verdadero
// !=	            No igual	                2 != "3"	verdadero
// >	            Mayor que	                3 > 2	    verdadero
// >=	            Mayor o igual que	        2 >= 2	    verdadero
// <	            Menor que	                2 < 3	    verdadero
// <=	            Menor o igual que	        2 <= 3	    verdadero



// OPERADORES LÓGICOS
// Usa los operadores lógicos AND (&&), OR (||) y NOT (!) para controlar el flujo de una secuencia de comandos en función de la evaluación de dos o más sentencias condicionales

console.log( true && true && true && true )
console.log(2 === 2 && 2 === "2");

console.log( false || true || false || false )
console.log(2 === 3 || 5 === 5)

console.log(2 === 2 && !"My string.");

// Una expresión lógica NOT (!) niega el valor veraz o falso de un operando y evalúa a true si el operando se evalúa como false y false si el operando se evalúa como true

console.log(!true);
console.log(!false);

// Usar el operador lógico NOT (!) frente a otro tipo de datos, como un número o una cadena, coerciona ese valor a un valor booleano y revierte el valor veraz o falso del resultado.

console.log(!"string");
console.log(!0);

// Es una práctica común usar dos operadores NOT para forzar rápidamente los datos a su valor booleano coincidente
console.log(!!"string")
console.log(!!0)


// El operador AND (&&) 
// muestra el primero de sus dos operandos 
// solo si ese operando se evalúa como false, 
// y muestra el segundo operando en caso contrario,
// si el primer operador se evalúa como true.

// En las comparaciones que se evalúan como valores booleanos, muestra true solo si los operandos en ambos lados del operador lógico AND se evalúan como true. Si cualquiera de los lados se evalúa como false, muestra false.

function operadorAnd() {
    const valor = 10
    return valor && 'Otro valor'
}

const resultadoAnd = operadorAnd()
console.log(resultadoAnd)

// ---- COMPARACIÓN ---------------------------
if (true && true)
// if (false && true)
    console.log("Ambas condiciones verdaderas")
else 
    console.log("Alguna de las condiciones es falsa")


// El operador OR (||) 
// muestra el primero de sus dos operandos 
// solo si ese operando se evalúa como true 
// y muestra el segundo operando en caso contrario, 
// si el primer operando se evalúa como false

// En las comparaciones que se evalúan como valores booleanos, esto significa que muestra true si alguno de los operandos se evalúa como true y si ninguno de los lados se evalúa como true, muestra false:

function operadorOr() {
    let valor = 4
    return valor || 'Valor no valido'
}

const resultadoOr = operadorOr()
console.log(resultadoOr)

// ---- COMPARACIÓN ---------------------------
if (true || false)
// if (false || false)
    console.log("Alguna condicion es falsa")
else 
    console.log("Ambas condiciones son falsa")


// Operador coalescente nulo
// el "operador coalescente nulo" (??) 
// muestra el primer operando 
// solo si ese operando tiene 
// algún valor distinto de null o undefined. 
// De lo contrario, muestra el segundo operando.

function operadorNulo() {
    const valor = [1, 2, 3]
    // const valor = null
    // const valor = undefined
    return valor ?? 'No hay valores para mostrar'
}

const resultadoNulo = operadorNulo()
console.log(resultadoNulo)