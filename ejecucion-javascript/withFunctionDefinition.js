'use strict'
let serie = 'Friends'
quedarAmigos()

function quedarAmigos() {
    console.log('Entrando en el bar')

    let bar = 'Central Park'
    beber()
    comer()

    function beber() {
        let bebida = 'Café'
        console.log(`Bebiendo ${bebida} en ${bar}`)
    }

    function comer() {
        console.log('Ñaamm...')
    }
}