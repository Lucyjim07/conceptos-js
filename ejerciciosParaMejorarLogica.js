/* 
1) Crear una función que permita realizar las 4 operaciones aritméticas básicas (suma, resta, multiplicacion, division).
La función debe recibir 3 parametros, dos deben ser los valores y el tercer parámetro debe ser la operación en minúsculas.
Si el parámetro de la operación no es válido que retorne un error informando lo ocurrido
*/




/*
2) Crear una función que almacene en un arreglo todos los números pares desde a hasta b.
a y b son valores que se pasan a la función como parámetros y la función retorna un objeto de tipo array ( [] ) con los números pares.

TIPS
Un array se crea de la siguiente manera (se declara una variable y se asigna "=" el objeto de arreglo vacío "[]" 

let nombreDelArreglo = []

Para saber como se agregan elementos a un arreglo, estudie la documentación de los arreglos en: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

*/




/*
3) Crear una funcion que imprima la tabla de multiplicar de un número dado por parámetro, desde el 1 hasta un máximo que también debe ser dado por parámetro.

Cuando se vaya a imprimir la multiplicación de un múltipo de 5 se deben mostrar 3 asteriscos ***

TIPS
No todas las funciones tienen que retornar un valor, la propia función puede imprimir por consola los valores que se requieren.

El formato en el que se debe mostrar la tabla es como se muestra en el siguiente ejemplo
=> 1 * 1 = 1
=> 1 * 2 = 2
=> 1 * 3 = 3
=> 1 * 4 = 4
=> 1 * 5 = ***
=> 1 * 6 = 6
*/


/*
4) Crear una función que retorne un arreglo con los números del 1 al 100 que no sean múltiplos de 3.

TIPS
Tener en cuenta como se crea y como se agregan elementos a un arreglo visto en el ejercicio #2
*/






/*
5) Crear una función que genere un número aleatorio entre 1 y 1000 y que a ese número aleatorio le calcule la mitad, el doble y la raíz cuadrara. La función debe retornar un objeto con todos esos valores de la siguiente forma:

{
    aleatorio: 0,
    mitad: 0,
    doble: 0,
    raiz: 0
}

Reemplazar los ceros con los valores calculados

TIPS
Para crear un número aleatorio entre un valor mínimo y un valor máximo utilice la siguiente expresión:

const numeroAleatorio = Math.floor(Math.random() * (valorMaximo - valorMinimo) + valorMinimo)

Si no sabe calcular la raiz cuadrada de un número, búsque en Google o en la documentación de Javascript en su portal de MDN una función que le ayude a realizar esta operación.

*/








/*
6) Crear una función la cual va a recibir por parámetro un arreglo que contenga varios tipos de datos y que retorne un arreglo que contenga únicamente los valores de tipo numérico.

Por ejemplo, si la función recibe el siguiente arreglo
[1, 2, true, 'hola', null, undefined, 3]

La función debe retornar el siguiente arreglo con los valores que son números
[1, 2, 3]

*/








/*
7) Crear una función la cual va a recibir 2 parámetros, el primero será un arreglo que contenga varios tipos de datos, el segundo parámetro será el nombre de un tipo de datos ('number', 'string', 'boolean', etc...) y que retorne un arreglo que contenga todos los valores que NO sean del tipo especificado

Por ejemplo, si la función recibe el siguiente arreglo
[1, 2, true, 'hola', null, undefined, 3]

y recibe el tipo de dato 'number'

La función debe retornar el siguiente arreglo con los valores que NO son de ese tipo
[true, 'hola', null, undefined]
*/


/*
Revisar los métodos que tienen los strings
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
*/

/*
Revisar los métodos que tienen los arrays
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
*/





/* 
8) Crear un programa que cuente el número de caracteres de una cadena de texto. La funcion debe validar que el parámetro que va a recibir es de tipo string y si se envía una cadena vacía informe que no se ingresó ninguna cadena

TIPS
los strings tienen un método especial que cuentan la longitud de la cadena (string.length)
*/



/*
9) Crear una funcion que reciba una cadena de textos y un número y retorne solo la cantidad de caracteres del texto indicados por el número dado. Haga todas las validaciones posibles.

TIPS
los strings tienen un método especial que obtiene una cantidad de caracteres según un número (string.slice)

Ej: texto: "Hola mundo"
   numero: 4
resultado: "Hola" <- los primeros 4 caracteres de la cadena
*/





/*
10) Crear una función que reciba una cadena de texto y un caracter que va a servir para separar en secciones la cadena de texto dada. Haga todas las validaciones posibles.

TIPS
los strings tienen un método especial que separa una cadena de texto según un separador (string.split)

Ej: texto: "500-253-9632"
separador: -
resultado: ["500", "253", "9632"] <- Separa la cadena en bloques de caracteres cada vez que encuentra el separador
*/




/*
11) Crear una funcion que imprima el texto dado por un parámetro la cantidad de veces también dado por otro parámetro. Haga todas las validaciones posibles.


*/