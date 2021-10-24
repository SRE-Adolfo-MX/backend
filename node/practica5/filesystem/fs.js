
const fs = require("fs");


/* // imprimir contenido de un archivo

const fs = require("fs");

fs.readFile('README.md', (err, data) =>{
    if (err){
        console.error("No se puede leer:", err)
    } else {
        console.log(data.toString())
    }
}) */

// escribir en un archivo

/* fs.writeFile(`${__dirname}/archivo_nuevo.txt`,"Este es nuevo archivo",(err)=>{
    if(err){
        console.error("No se pudo escribir el file",err)
    }
})
 */

// eliminar

/* fs.unlink(`${__dirname}/archivo_nuevo.txt`, (err)=>{
    if (err){
        console.error("No se pudo eliminar", err)
    }
}) */

// crear directorio

fs.mkdir(`${__dirname}/nuevo_archivo`, (err) =>{
    if(err){
        console.error("No se pudo crear el directorio",err)
    }
})