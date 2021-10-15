// Preparar un frappe
// 1. Colocar orden (2 seg)
// 2. Cortar fruta (2 seg)
// 3. Añadir agua y hielo (1 seg)
// 4. Iniciar la máquina (1 seg)
// 5. Seleccionar contenedor (1 seg)
// 6. Seleccionar toppings (3 seg)
// 7. Servir helado (2 seg)

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };
  
  // preparación del frappe
  //

  //console.log(stocks.fruits)
const colocarOrden = (callback) => {
    setTimeout(() => {
    callback()
    }, 2000) 
};

const corterFruta = (callback) => {
    setTimeout(() => {
    callback()
    }, 2000) 
};

const anadirAguaHielo = (callback) => {
    setTimeout(() => {
    callback()
    }, 1000) 
};

const iniciarMaquina = (callback) => {
    setTimeout(() => {
    callback()
    }, 1000) 
};

const seleccionarContenedor = (callback) => {
    setTimeout(() => {
    callback()
    }, 1000) 
};

const toping = (callback) => {
    setTimeout(() => {
    callback()
    }, 3000) 
};

const servirHelado = (callback) => {
    setTimeout(() => {
    callback()
    }, 2000) 
};



const frappe = (param1, param2, param3, param4) => {
    colocarOrden(()=>{
        console.log("Comienza orden");
        corterFruta((stocks)=>{
            console.log(`Se corta la furta ${param1}`)
            anadirAguaHielo(()=>{
                console.log(`Se añadio ${param2}`)
                iniciarMaquina(()=>{
                    console.log("Se inicio maquina")
                    seleccionarContenedor(()=>{
                        console.log(`Se selecciono contenedor ${param3}`)
                        toping(()=>{
                            console.log(`Se le puso topping de ${param4}`)
                            servirHelado(()=>{
                                console.log("Tu helado esta listo")
                            })
                        })
                    })
                })
            })
        })
    })
}

let fruit = stocks.fruits[0]
let liquido = stocks.liquid[0]
let contenedor = stocks.holder[0]
let topping = stocks.toppings[0]

frappe(fruit, liquido, contenedor, topping)

let fruit1 = stocks.fruits[1]
let liquido1 = stocks.liquid[1]
let contenedor1 = stocks.holder[1]
let topping1 = stocks.toppings[1]

frappe(fruit1, liquido1, contenedor1, topping1)


let fruit2 = stocks.fruits[3]
let liquido2 = stocks.liquid[1]
let contenedor2 = stocks.holder[1]
let topping2 = stocks.toppings[3]

frappe(fruit2, liquido2, contenedor2, topping2)