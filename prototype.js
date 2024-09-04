// Prototype. Todos los objetos en Javascript tienen un objeto prototype, un objeto del cual se heredan métodos y propiedades. Prototype permite un uso eficiente de memoria y reutilización de código.

const mecanico = {
    tipo: 'Mecanico avanzado',
    arreglar: function (parte) {
        console.log(`Arreglando ${parte}`);
    },
};

const cheff = {
    tipo: 'Cocina basica',
    cocinar: function (plato) {
        console.log(`Cocinando ${plato}`);
    },
};

const pedro = {
    nombre: 'Pedro',
    edad: 28,
    profesion: 'Desarrollador',
    tipo: 'Frontend',
};

Object.setPrototypeOf(pedro, cheff);
Object.setPrototypeOf(pedro, mecanico);
// pedro.cocinar('Sancocho');

// cheff.cortar = function (ingrediente) {
//     console.log(`Cortando ${ingrediente}`);
// };

pedro.arreglar('chassis');

// pedro.cortar('Zanahoria');

// console.log( pedro.tipo )

function Person(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const lucy = new Person('Lucy', 'Jimenez');
const oscar = new Person('Oscar', 'Jimenez');

// console.log(lucy);
// console.log(oscar);

Person.prototype.saludar = function () {
    console.log(`Hola! Yo soy ${this.nombre}`);
};

// lucy.saludar()
// oscar.saludar()

console.log(lucy.__proto__);

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    decirHola() {
        console.log(
            `Hola!!! mi nombre completo es ${this.nombre} ${this.apellido}`
        );
    }
}

const ale = new Persona('Gabriel', 'Paz');

ale.decirHola();
