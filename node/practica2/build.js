// 1. medir espacio 1 seg
// 2. comprar materiales 2 seg
// 3. hacer esqueleto 2 seg
// 4. hacer mezcla 3 seg
// 5. poner ladrillo 3 seg
// 6. aplanado 4 seg
// 7. pintar 2 seg

const medirEspacio = (callback) => {
    setTimeout(() => {
    callback()
    }, 1000) 
};
const comprarMateriales = (callback) => {
    setTimeout(() => {
        callback()
        }, 2000) 
};
const hacerEsqueleto = (callback) => {
    setTimeout(() => {
        callback()
        }, 2000) 
};
const hacerMezcla = (callback) => {
    setTimeout(() => {
        callback()
        }, 3000) 
};
const ponerLadrillo = (callback) => {
    setTimeout(() => {
        callback()
        }, 3000) 
};
const aplanado = (callback) => {
    setTimeout(() => {
        callback()
        }, 4000) 
};
const pintar = (callback) => {
    setTimeout(() => {
        callback()
        }, 2000) 
};
// callback help
const contruirMuro = () => {
    medirEspacio(() => {
        console.log("El espacio fue medido");
        comprarMateriales(()=>{
            console.log("Ya compre material")
            hacerEsqueleto(()=>{
                console.log("Esqueleto listo");
                hacerMezcla(()=>{
                    console.log("Mezcla lista")
                    ponerLadrillo(()=>{
                        console.log("Ladrillo listo")
                        aplanado(()=>{
                            console.log("Aplanado listo")
                            pintar(()=>{
                                console.log("Muro pintado")
                            })
                        })
                    })
                })
            })
        })
    });

};

console.log("iniciando obra")

contruirMuro();
contruirMuro();
contruirMuro();
contruirMuro();