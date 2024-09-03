export function max(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return a;
    }
}


export function sum(a, b) {
    return a + b;
}


export function fizzBuzz(n = 0) {
    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz0';
    } else if (n % 3 === 0) {
        return 'Fizz';
    } else if (n % 5 === 0) {
        return 'Buzz';
    } else {
        return n.toString();
    }
}

export function average(numbers = []) {
    return 0;
}