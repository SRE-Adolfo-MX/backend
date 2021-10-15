let name = process.env.koder
//En terminal declarar export koder="Dato"
if (name) {
    console.log(`Hello koder ${name}`)    
}else{
    console.log("elemento vacio")
}

console.log("Terminando ejecucion")
