// El objeto this
// 'this' es un objeto especial de Javascript que hace referencia al contexto en donde se ejecuta. Se refiere al objeto que se está actualmente ejecutando una función. Su valor está determinado por como la función es llamada y no en donde está definida.

function getName() {
    // console.log(this)
    console.log(this.name)
}

global.name = 'Lucy'

getName()



// const perfil = {
//     name: 'Ale',
//     getName: getName
// }

// perfil.getName()

const video = {
    title: 'video name',
    play: function () {
        console.log(this)
    }
}

// video.play()

video.stop = function () {
    console.log(this)
}

video.stop()

// ------------------------------
function playVideo() {
    console.log(this)
}

playVideo()




// ------------------------------
const video = {
    title: 'video name',
    tags: ['tag 1', 'tag 2', 'tag 3'],
    play: function () {
        console.log(this)
    },
    showTags: function () {
        this.tags.forEach(function (tag) {
            console.log(tag);
        })
    }
}

video.showTags()
