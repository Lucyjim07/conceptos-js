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
    email: 'hugo_ma_pato@tiorico.com'
}

const fullUserConcat = Object.assign({}, user, userContact);
console.log(fullUserConcat)

const fullUserSpread = {
    ...user,
    ...userContact,
    email: 'hugo-ma-pato1@tiorico.com'
}
console.log(fullUserSpread)

