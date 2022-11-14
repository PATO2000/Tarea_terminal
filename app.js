const argv2 = require("./config/yargs.js");
const {crearArchivo} = require("./helpers/multiplicar.js");


console.clear();



crearArchivo(argv2.b, argv2.h, argv2.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

