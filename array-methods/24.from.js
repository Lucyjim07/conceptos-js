// 24. Array.from(arrayLike)
// 24. Array.from(arrayLike, callbackMapFn)
// crea una nueva instancia de Array a partir de un objeto iterable.

const str = '1234'
const numbers = Array.from(str);
console.log(numbers)


const arrayNumbers = Array.from(str, (element) => { return Number(element) })
// const arrayNumbers = Array.from(str, (element) => { return +element })
console.log(arrayNumbers)




const range = (start, stop, step) => {
    return Array.from({ length: (stop - start) / step + 1 }, (_, i) => {
        return start + i * step;
    })
}

console.log(range(0, 4, 1))
console.log(range(1, 10, 2))
console.log(
    range("A".charCodeAt(), "Z".charCodeAt(), 1)
        .map(element => String.fromCharCode(element))
)
