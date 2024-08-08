function cortar(ingrediente) {
    // if(ingrediente === 'lechuga') {
    //     throw new Error('No hay lechuga')
    // }
    console.log(`Cortar ${ingrediente}`)
}

function mezclarIngredientes(veces) {
    if(veces <= 0) return;

    console.log(`Mezclar #${veces}`)
    mezclarIngredientes(veces - 1)
    // mezclarIngredientes(veces)
}

function comer() {
    console.log('Comer')
}

function hacerEnsaladaMixta() {
    cortar('tomate')
    cortar('lechuga')
    cortar('cebolla')
    mezclarIngredientes(5)
    comer()
}

hacerEnsaladaMixta()