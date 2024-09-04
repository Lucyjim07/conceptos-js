// Prototype. Todos los objetos en Javascript tienen un objeto prototype, un objeto del cual se heredan métodos y propiedades. Prototype permite un uso eficiente de memoria y reutilización de código.

const pedro = {
    nombre: 'Pedro',
    edad: 28,
    profesion: 'Desarrollador',
    tipo: 'Frontend'
}

const cheff = {
    tipo: 'Cocina basica',
    cocinar: function (plato) {
        console.log(`Cocinando ${plato}`)
    }
}

Object.setPrototypeOf(pedro, cheff);

pedro.cocinar('Sancocho');

cheff.cortar = function (ingrediente) {
    console.log(`Cortando ${ingrediente}`)
}