const argv = require('./config/yargs').argv;
const {CrearArchivo, ListarTabla} = require('./Multiplicacion/multiplicacion');

let comando = argv._[0]
console.log(argv)

/* console.log(comando) */

switch (comando) {
    case 'listar':

        ListarTabla(argv.base, argv.limite).then((tabla) => {
            console.log(tabla)
        })
        .catch((err) => {
            console.log(err)
        })
        break;

    case 'crear':

        CrearArchivo(argv.base, argv.limite).then((archivo) => {
            console.log(`Archivo creado: ${archivo}`)
        })
        .catch((err) => {
            console.log(err)
        }) 
         
        break
    default:
        break;
}


/* console.log(argv)

console.log(`La base es ${argv.base}`)
console.log(`El limite es ${argv.limite}`) */





// node app.js --base=6


