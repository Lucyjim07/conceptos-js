import { describe, test, it, expect } from 'vitest'
import { max } from '../src/intro';

describe('funcion max', () => {
    it('Debe retornar el primer argumento que es el mayor', () => {
        // Arrange
        const a = 2;
        const b = 1;

        // Act
        const resultado = max(a, b);

        // Assert
        expect(resultado).toBe(a);
    })

    it('Debe retornar el segundo argumento que es el mayor', () => {
        // Arrange
        const a = 2;
        const b = 10;

        // Act
        const resultado = max(a, b);

        // Assert
        expect(resultado).toBe(b);
    })

    it('Debe retornar el primer argumento ya que son iguales', () => {
        // Arrange
        const a = 2;
        const b = 2;

        // Act
        const resultado = max(a, b);

        // Assert
        expect(resultado).toBe(a);
    })
})

describe.todo('function sum', () => {
    it('Debe sumar 2 numeros', () => { })
})

describe.todo('function fizzBuzz', () => {

})

describe.todo('function average', () => {

})