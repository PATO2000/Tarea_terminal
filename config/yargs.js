const argv2 = require("yargs")
    .option('b',{
        alias: ['base', 'tete'],
        type: 'number',
        demandOption: true,
        describe: "base de multiplicación"

    })
    .check((argv2, options) => {
        if(isNaN(argv2.b)){
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption: false,

    })
    .option('h',{
        alias: 'hasta',
        type: 'numnber',
        demandOption: 10,

    })
    .argv;


 module.exports = argv2;   