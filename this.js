// El objeto this
// 'this' es un objeto especial de Javascript que hace referencia al contexto en donde se ejecuta. Se refiere al objeto que está actualmente ejecutando una función. Su valor está determinado por como la función es llamada y no en donde está definida.

function getName() {
    console.log(this);
    console.log(this.name);
}

// global.name = 'Lucy';
// getName();

const perfil = {
    name: 'Ale',
    saludar: getName,
};

perfil.saludar();

const video = {
    title: 'nombre del video',
    play: function () {
        console.log(this.title);
    },
};

// video.play()

video.stop = function () {
    console.log(this);
};

video.stop();

// ------------------------------
function playVideo() {
    console.log(this);
}

playVideo();

// ------------------------------
const video = {
    title: 'video name',
    tags: ['tag 1', 'tag 2', 'tag 3'],
    play: function () {
        console.log(this.title);
    },
    showTags: function () {
        this.tags.forEach((tag) => {
            console.log(this.title, tag);
        });
    },
};

video.play();
