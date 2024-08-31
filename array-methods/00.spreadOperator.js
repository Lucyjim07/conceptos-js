// uso 1. Hacer una copia de un arreglo
const numbers = [1, 2, 3]

// no copia, asigna la misma posición en memoria a dos variables, por eso si se hacen cambios, se hacen sobre un único elemento en memoria que tiene 2 apuntadores
// const copy = numbers
// copy[0] = 0

// para hacer una copia se usa el operador spread (...)
// este operador propaga todos los valores de un arreglo en otro arreglo
const copy = [...numbers]
copy[0] = 0

console.log('numeros: ', numbers)
console.log('copia:', copy)


// uso 2. Concatenar dos o más arreglos
const group1 = [1, 2, 3]
const group2 = [4, 5, 6]
const group3 = [7, 8, 9]

const allConcat = group1.concat(group2, group3)
console.log(allConcat)

const allSpread = [...group1, ...group2, ...group3]
console.log(allSpread)


// uso 3. Hacer una copia de un objeto
const profile = {
    id: 1,
    name: 'Pedro'
}

let profilesCopy = { ...profile }
profilesCopy.phone = '+57 555-555-5555'

console.log('original:', profile)
console.log('copia:', profilesCopy)


// uso 4. Concatenar las propiedades de 2 o más objetos
const user = {
    id: 5,
    name: 'Hugo',
    lastname: 'McPato'
}

const userContact = {
    address: 'Mansion McPato',
    phone: {
        main: '+57 555-555-5555',
        home: '+57 666-666-6666',
        office: '+57 777-777-7777'
    },
    email: 'hugo_ma_pato@tiorico.com'
}

// const fullUserConcat = Object.assign({}, user, userContact);
// console.log(fullUserConcat)

const fullUserSpread = {
    ...user,
    ...userContact,
    age: 8,
    email: 'hugo-ma-pato1@tiorico.com'
}
// console.log(fullUserSpread)

// Nota: tener cuidado con la creación de los objetos ya que solo copia el primer nivel de profundidad, si existen más niveles de profundidad dentro del objeto, los objetos no se copian si no que se crea una referencia al espacio en memoria del objeto original.

//ejemplo modificando una propiedad de primer nivel de profundidad en el objeto userContact
userContact.address = '🏰 McPato'

userContact.phone.home = '☎'
userContact.phone.office = '📵'

console.log(userContact)
console.log(fullUserSpread)



// uso 5. distribuir los elementos de un arreglo en los parámetros de una función

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

const numbersForFunction = [5, 4, 11]

const result = sum(numbersForFunction[0], numbersForFunction[1], numbersForFunction[2])
const resultSpread = sum(...numbersForFunction)

console.log(result, resultSpread)


// uso 6. El anterior caso habre la puerta a la operación inversa REST operator o el resto de los elementos
function sumTwoAndOthers(num1, num2, ...others) {
    console.log(`El primer número: ${num1}`)
    console.log(`El segundo número: ${num2}`)
    console.log(`El resto de los numeros enviados: ${others}`)
}

sumTwoAndOthers(5, 8, 1, 2, 3, 4)
