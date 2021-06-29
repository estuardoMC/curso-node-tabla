const fs = require('fs')

const crearArchivo = async( base, statusL, numberH)=>{
    
    try{
     
    
    let salida = '';
    let consola = '';
    for (i = 0; i <= numberH; i++){
    salida += `${base} x ${i} x ${base*i}\n`; 
    consola += `${base} ${'x'.red} ${i} ${'='.cyan} ${base*i}\n`; 
    }
    if(statusL == true){
        console.log('================' .brightCyan)
        console.log(`Tabla de multiplicar del ${base} by Estuardo`.bgCyan.black)
        console.log('================'.brightCyan)
        console.log(consola .green)

    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    
        return `tabla-${base}.txt`
    }catch(error){
        throw error
    }
}

module.exports = {
    crearArchivo
}