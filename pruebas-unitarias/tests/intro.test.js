import { describe, test, expect, it } from 'vitest';
import { fizzBuzz, max } from '../src/intro';

describe('funcion max', () => {
    test('el valor a es mayor que b, entonces debe retornar a', () => {
        expect(max(10, 8)).toBe(10);
    });

    test('el valor b es mayor que a, entonces debe retornar b', () => {
        // Arrange
        const numeroA = 8;
        const numeroB = 10;

        // Act
        const numeroMayor = max(numeroA, numeroB);

        // Assert
        expect(numeroMayor).toBe(numeroB);
    });

    test('el valor a es igual que b, entonces debe retornar a', () => {
        // Arrange
        const numeroA = 10;
        const numeroB = 10;

        // Act
        const numeroMayor = max(numeroA, numeroB);

        // Assert
        expect(numeroMayor).toBe(numeroA);
    });
});

describe('function fizzBuzz', () => {
    it('si n es multiplo de 3 y tambien es multiplo de 5 retorna FizzBuzz', () => {
        //arrange
        const numero = 15;

        //act
        const resultado = fizzBuzz(numero);

        //assert
        expect(resultado).toBe('FizzBuzz');
    });

    it('si n es multiplo de 3 retorna Fizz', () => {
        //arrange
        const numero = 3;

        //act
        const resultado = fizzBuzz(numero);

        //assert
        expect(resultado).toBe('Fizz');
    });

    it('si n es multiplo de 5 retorna Buzz', () => {
        //arrange
        const numero = 5;

        //act
        const resultado = fizzBuzz(numero);

        //assert
        expect(resultado).toBe('Buzz');
    });

    it('si n es multiplo de 5 retorna Buzz', () => {
        //arrange
        const numero = 2;

        //act
        const resultado = fizzBuzz(numero);

        //assert
        expect(resultado).toBe('2');
    });
});
