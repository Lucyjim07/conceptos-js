// Flujo de control
// El flujo de control es el orden en el que el intérprete de JavaScript ejecuta las declaraciones. Si una secuencia de comandos no incluye declaraciones que alteren su flujo, se ejecuta de principio a fin, una línea a la vez. Las estructuras de control se usan para determinar si un conjunto de declaraciones se ejecuta según un conjunto definido de criterios, si se ejecuta un conjunto de declaraciones repetidamente o si se interrumpe una secuencia de declaraciones.

// INSTRUCCIONES CONDICIONALES
// 1. if...else

// Una declaración if evalúa una condición dentro de los paréntesis coincidentes que siguen. Si la condición dentro de los paréntesis se evalúa como true, se ejecuta la declaración o declaración de bloque que sigue a los paréntesis coincidentes:

const nacionalidad = "Colombia";

if (nacionalidad === "Colombia") {
    console.log(
        "La condicion se evaluo como verdadera, Entonces SI es de Colombia"
    );
} else {
    console.log(
        "La condicion se evaluo como falsa, Entonces NO es de Colombia"
    );
}

if (true) {
    const myString = "Es verdadero";
    console.log(myString);
}

// Si la condición dentro de los paréntesis se evalúa como false, se ignora la declaración que la sigue:
if (false) console.log("True.");

// La palabra clave else que sigue inmediatamente a una declaración if, es la declaración que se ejecutará si la condición if se evalúa como false

if (false) console.log("True.");
else {
    console.log("False.");
}

if (condicion) {
} else {
}

const valorDeLaCompra = 150000;

// Se pueden encadenar condiciones if else si se agrega una nueva condición if después de una condición else.
const myCondition = 2;
if (myCondition === 5) {
    console.log("Five.");
} else if (myCondition === 3) {
    console.log("Three");
} else {
    console.log("Neither five nor three.");
}


if (condicion) { }
else if (otraCondicion) { }
else if (terceraCondicion) { }
else { }






// 2. Operador ternario

// El operador ternario es la abreviatura para ejecutar una expresión de forma condicional. Como su nombre lo indica, el operador ternario es el único operador de JavaScript que usa tres operandos:

// Una condición que se evaluará, seguida de un signo de interrogación (?). 
// La expresión que se ejecutará si la condición se evalúa como true, seguida de dos puntos (:).
// La expresión que se ejecutará si la condición se evalúa como false.


const variable = (false) ? "" : ""
console.log(variable)


(condicion) 
  ? (expresionSiTrue) 
  : ((condicion) 
    ? (expSiTrue) 
    : (expSiFalse))


console.log(
false 
  ? 'Se cumplio la primera condicion'
  : ( false ? 'Se cumplio la segunda condicion' : 'No se cumplio la segunda condicion' )
)

const myFirstResult = true ? "First value." : "Second value.";
const mySecondResult = false ? "First value." : "Second value.";

console.log(myFirstResult);
console.log(mySecondResult);

// 3. switch...case
// Usa la sentencia switch para comparar el valor de una expresión con una lista de valores potenciales definidos con una o más palabras clave case.
// La sintaxis switch...case usa la palabra clave switch, seguida de una expresión que se evaluará entre paréntesis
// El cuerpo de switch puede contener palabras clave case, por lo general, una o más, seguidas de una expresión o un valor y seguidas de dos puntos (:).
// Para evitar la conmutación por error, finaliza cada caso con la palabra clave break, que detiene inmediatamente la evaluación del cuerpo switch:



// valores potenciales: Macho / Hembra
const generoMascota = 'Hombre'

switch(generoMascota) {
  case 'Macho':
    console.log('Hola animalito macho')
    break;

  case 'Hembra':
    console.log('Hola animalita hembra')
    break;

  default:
    console.log('No es un valor potencial de la lista')
    break;
}




const colorBandera = 'Azul'

switch (colorBandera) {
  case 'Amarillo':
  case 'Azul':
  case 'Rojo':
    console.log('Es de Colombia')
    break;

  case 'Tomate':
    console.log('No es de Colombia')
    break;

  default:
    console.log('No se cual color es ese')
    break;
}


const esActivo = false // true - false

switch (esActivo) {
  case true:
    console.log('Su cuenta esta activa')
    break;

  case false:
    console.log("Su cuenta esta inactiva")
    break;

  default:
    console.log('no es un valor true o false')
    break;
}

esActivo 
  ? console.log('Su cuenta esta activa')
  : console.log("Su cuenta esta inactiva")






switch (20) {
    case 10:
        console.log("The value was ten.");
        break;
    case 5:
        console.log("The value was five.");
        break;
    default:
        console.log("The value was something unexpected.");
}

// ITERACIONES O BUCLES O CICLOS
// Los bucles te permiten repetir un conjunto de declaraciones mientras se cumpla una condición o hasta que se cumpla una condición. Usa bucles sirve para ejecutar un conjunto de instrucciones una cantidad fija de veces, hasta que se logre un resultado específico o hasta que el intérprete llegue al final de una estructura de datos iterable

// 1. while
let veces = 0

while (veces < 10) {
  console.log('Ejecutando el ciclo while')
  // una de esas cosas es cambiar la condicion
  veces =+ 3
}

// let iterationCount = 0;
while (iterationCount < 3) {
    iterationCount++;
    console.log(`Loop ${iterationCount}.`);
}

// Si el intérprete encuentra una declaración continue en un bucle while, detiene esa iteración, vuelve a evaluar la condición y, si es posible, continúa el bucle:
// let iterationCount = 0;
while (iterationCount <= 5) {
    iterationCount++;
    if (iterationCount === 3) {
        continue;
    }
    console.log(`Loop ${iterationCount}.`);
}
console.log("Loop ended.");

// Si el intérprete encuentra una declaración break en un bucle while, se detiene la iteración y no se vuelve a evaluar la condición, lo que permite que el intérprete siga leyendo el resto de codigo:
let iterationCount = 1;
while (iterationCount <= 5) {
    if (iterationCount === 3) {
        console.log(`Iteration skipped.`);
        break;
    }
    console.log(`Loop ${iterationCount}.`);
    iterationCount++;
}
console.log("Loop ended.");

// Puedes usar while para iterar una cantidad específica de veces, como se ve en el ejemplo anterior, pero el caso de uso más común de while es un bucle de longitud indeterminada:

let randomize = () => { return Math.floor(Math.random() * 10); }

let randomNum = randomize();

while (randomNum !== 3) {
    console.log(`The number is not ${randomNum}.`);
    randomNum = randomize();
}

console.log(`The correct number, ${randomNum}, was found.`);

