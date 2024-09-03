import { describe, test, it, expect } from 'vitest'

describe.skip('Una descripción del test', () => {
    it('Descripción del unit test con "it"', () => {
        // se usa el patrón AAA
        // Arrange: Se establece todo el entorno necesario para ejecutar la prueba, incluido data necesaria o configuraciones
        // Act: Se ejecutan las acciones para probar el elemento
        // Assert: Se revisan las salidas que aseguran que nuestras expectativas se cumplen
        expect(true).toBeTruthy();
    })
})


describe.skip('Una descripción del test', () => {
    test('Descripción del unit test con "test"', () => {
        expect(1).toEqual(1)
    })
})