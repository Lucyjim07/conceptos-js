// Flujo de control
// El flujo de control es el orden en el que el intérprete de JavaScript ejecuta las declaraciones. Si una secuencia de comandos no incluye declaraciones que alteren su flujo, se ejecuta de principio a fin, una línea a la vez. Las estructuras de control se usan para determinar si un conjunto de declaraciones se ejecuta según un conjunto definido de criterios, si se ejecuta un conjunto de declaraciones repetidamente o si se interrumpe una secuencia de declaraciones.

// INSTRUCCIONES CONDICIONALES
// 1. if...elsse

// Una declaración if evalúa una condición dentro de los paréntesis coincidentes que siguen. Si la condición dentro de los paréntesis se evalúa como true, se ejecuta la declaración o declaración de bloque que sigue a los paréntesis coincidentes:

if (true) console.log("True.")
if (true) {
    const myString = "True.";
    console.log(myString);
}

// Si la condición dentro de los paréntesis se evalúa como false, se ignora la declaración que la sigue:
if (false) console.log("True.")

// La palabra clave else que sigue inmediatamente a una declaración if, la declaración que se ejecutará si la condición if se evalúa como false

if ( false ) console.log( "True." )
else console.log( "False" )

// Se pueden encadenar condiciones if else si se agrega una nueva condición if después de una condición else.
const myCondition = 2;
if ( myCondition === 5 ) {
    console.log( "Five." );
} else if ( myCondition === 3 ) {
    console.log( "Three" );
} else {
    console.log( "Neither five nor three." );
}

// 2. Operador ternario

// El operador ternario es la abreviatura para ejecutar una expresión de forma condicional. Como su nombre lo indica, el operador ternario es el único operador de JavaScript que usa tres operandos:

// Una condición que se evaluará, seguida de un signo de interrogación (?).
// La expresión que se ejecutará si la condición se evalúa como true, seguida de dos puntos (:).
// La expresión que se ejecutará si la condición se evalúa como false.
const myFirstResult  = true  ? "First value." : "Second value.";
const mySecondResult = false ? "First value." : "Second value.";

console.log(myFirstResult)
console.log(mySecondResult)


// 3. switch...case
// Usa la sentencia switch para comparar el valor de una expresión con una lista de valores potenciales definidos con una o más palabras clave case. 
// La sintaxis switch...case usa la palabra clave switch, seguida de una expresión que se evaluará entre paréntesis
// El cuerpo de switch puede contener palabras clave case, por lo general, una o más, seguidas de una expresión o un valor y seguidas de dos puntos (:).
// Para evitar la conmutación por error, finaliza cada caso con la palabra clave break, que detiene inmediatamente la evaluación del cuerpo switch:

switch ( 20 ) {
    case 10:
      console.log( "The value was ten." );
      break;
    case 5:
      console.log( "The value was five." );
      break;
    default:
        console.log( "The value was something unexpected." );
  }




// ITERACIONES O BUCLES
// Los bucles te permiten repetir un conjunto de declaraciones mientras se cumpla una condición o hasta que se cumpla una condición. Usa bucles para ejecutar un conjunto de instrucciones una cantidad fija de veces, hasta que se logre un resultado específico o hasta que el intérprete llegue al final de una estructura de datos iterable

// 1. while

let iterationCount = 0;
while( iterationCount < 3 ) {
  iterationCount++;
  console.log( `Loop ${ iterationCount }.` );
}

// Si el intérprete encuentra una declaración continue en un bucle while, detiene esa iteración, vuelve a evaluar la condición y, si es posible, continúa el bucle:
let iterationCount = 0;
while( iterationCount <= 5 ) {
  iterationCount++;
  if( iterationCount === 3 ) {
    continue;
  }
  console.log( `Loop ${ iterationCount }.` );
}
console.log( "Loop ended." );

// Si el intérprete encuentra una declaración break en un bucle while, se detiene la iteración y no se vuelve a evaluar la condición, lo que permite que el intérprete continúe:
let iterationCount = 1;
while( iterationCount <= 5 ) {
  if( iterationCount === 3 ) {
    console.log(`Iteration skipped.`);
    break;
  }
  console.log( `Loop ${ iterationCount }.` );
  iterationCount++;
}
console.log( "Loop ended." );

// Puedes usar while para iterar una cantidad específica de veces, como se ve en el ejemplo anterior, pero el caso de uso más común de while es un bucle de longitud indeterminada:
let randomize = () => Math.floor( Math.random() * 10 );
let randomNum = randomize();
while( randomNum !== 3 ){
  console.log( `The number is not ${ randomNum }.` );
  randomNum = randomize();
}
console.log( `The correct number, ${ randomNum }, was found.` );





