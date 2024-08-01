'use strict'
const serie = 'Friends'

const quedarAmigos = function() {
    console.log('Entrando en el bar')

    const bar = 'Central Park'

    const beber = function() {
        const bebida = 'Café'
        console.log(`Bebiendo ${bebida} en ${bar}`)
    }

    const comer = function() {
        console.log('Ñaamm...')
    }

    beber()
    comer()
}
quedarAmigos()