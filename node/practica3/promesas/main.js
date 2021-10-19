const medirEspacio = (wallNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`Se midio el espacio para el muro ${wallNumber}`);
            resolve(wallNumber); //este es el parametro que le manda la variable a la siguiente funcion
        }, 1000);
    })
};

const hacerEsqueleto = (wallNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`Se construyo el esqueleto para el muro ${wallNumber}`);
            resolve(wallNumber);
        }, 2000);
    })
};

const hacerMezcla = (wallNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`Se puso mezcla para el muro ${wallNumber}`);
            reject(`Hubo un error en la mezcla del muro ${wallNumber}`);
        }, 3000);
    })
};

const ponerLadrillo = (wallNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`Se coloco los ladrillos para el muro ${wallNumber}`);
            resolve(wallNumber);
        }, 2000);
    })
};

/* medirEspacio(1)
.then(hacerEsqueleto)
.then(hacerMezcla).catch((error)=>{
    console.error("Error:", error);
})
.then(ponerLadrillo) */

const mesajeError = (mensaje) => {
    console.error("Error :", mensaje)
}

medirEspacio(1)
.then(hacerEsqueleto)
.then(hacerMezcla)
.catch(mesajeError)
.finally(()=>{
    console.log("Proceso terminado");
});