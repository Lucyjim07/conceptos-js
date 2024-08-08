function cortar(ingrediente) {
    console.log(`Cortar ${ingrediente}`)
}

function mezclarIngredientes(veces) {
    if(veces <= 0) return;

    console.log(`Mezclar #${veces}`)
    mezclarIngredientes(veces - 1)
}

function comer() {
    console.log('Comer')
}

function hacerEnsaladaMixta() {
    cortar('tomate')
    cortar('lechuba')
    cortar('cebolla')
    mezclarIngredientes(5)
    comer()
}

hacerEnsaladaMixta()