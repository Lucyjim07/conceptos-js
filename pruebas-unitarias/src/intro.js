export const max = (a, b) => (a > b ? a : b);

export const fizzBuzz = (n = 0) => {
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';

    if (n % 3 === 0) return 'Fizz';

    if (n % 5 === 0) return 'Buzz';

    return n.toString();
};
