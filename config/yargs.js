const descripcion = {

    demand: true,
    alias: 'd',
    dec: 'Descripcion de la tarea por hacer'
}

const completado = {

    alias: 'c',
    default: true,
    dec: 'Marca como completado la tarea'

}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}