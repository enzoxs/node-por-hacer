//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'listar':

        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('==== Por Hacer ===='.yellow);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('==============='.red);

        }

        break;
    case 'crear':

        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;


    case 'borrar':

        //console.log('aqui se borrara')

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('comando no reconocido');
}