// PROCESO HIJO
const parseArg = require('minimist');
const args = parseArg(process.argv.slice(2));
console.log(args);
console.log(args.cant);

const cantidadLoop = parseInt(args.cant) || 1000000;


process.on('message', msg => {
    console.log(`Mensaje del proceso padre: ${msg}`);
    let obj = {"id":0,"total":0};
    for (let index = 1; index < 1000; index++) {
        let aleatorio = Math.floor((Math.random() * 1000 + 1));
        obj[aleatorio].id =  aleatorio;
        obj[aleatorio].total =  obj[aleatorio].total++;
        console.log (index + " " + aleatorio)
    }
    process.send(obj)
})