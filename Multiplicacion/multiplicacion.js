const fs = require('fs');

let ListarTabla = (base, limite) => {

    return new Promise((resolve, reject)=>{

        if (!Number(base)) {
            reject (`El valor ingresado: ${base} no es un numero`);
            return
        }
    
        let data = ''
    
        for (let i = 1; i <= limite; i++) {
    
            data += `${base} * ${i} = ${base * i} \n`
    
        }

        if (!data) {
            reject(`La variable data esta vacia`)
            
        }else{
            resolve(data)
        }



    });
    
}





let CrearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject (`El valor ingresado: ${base} no es un numero`);
            return
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {
    
            data += `${base} * ${i} = ${base * i} \n`
    
        }
    
        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
            if (err){
                reject(err);
            }else{
                resolve(`Tabla-${base}.txt `);
            }
            
        });
    });

}

module.exports = {
    CrearArchivo,
    ListarTabla
}