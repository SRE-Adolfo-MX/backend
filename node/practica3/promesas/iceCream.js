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

const colocarOrden = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`Se comenzo con la orden ${param}`);
            resolve(param); //este es el parametro que le manda la variable a la siguiente funcion
        }, 2000);
    })
};

const cortarFruta = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let fruta = stocks.fruits[param]
            console.log(`Se corto la fruta ${fruta}`);
            resolve(param); //este es el parametro que le manda la variable a la siguiente funcion
        }, 2000);
    })
};

const anadirAguaHielo = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let liquid = stocks.liquid[param]
            if (liquid) {
                console.log(`Se uso el liquido: ${liquid}`);
                resolve(param);
            } else {
                reject(`La bebida con posicion: ${param} no existe`);
            }
        }, 1000);
    })
};

const iniciarMaquina = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`Se inicio la maquina: ${param}`);
            resolve(param); //este es el parametro que le manda la variable a la siguiente funcion
        }, 1000);
    })
};

const seleccionarContenedor = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let holder = stocks.holder[param]
            console.log(`Se uso el contenedor: ${holder}`);
            resolve(param); //este es el parametro que le manda la variable a la siguiente funcion
        }, 1000);
    })
};

const toping = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let topping = stocks.toppings[param]
            console.log(`Se uso el topping: ${topping}`);
            resolve(param); //este es el parametro que le manda la variable a la siguiente funcion
        }, 1000);
    })
};


const servirHelado = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`Se sirvio el helado: ${param}`);
            resolve(param); //este es el parametro que le manda la variable a la siguiente funcion
        }, 1000);
    })
};

const mesajeError = (mensaje) => {
    console.error("Error :", mensaje)
}

colocarOrden(1)
.then(cortarFruta)
.then(anadirAguaHielo)
.then(iniciarMaquina)
.then(seleccionarContenedor)
.then(toping)
.then(servirHelado)
.catch(mesajeError)
.finally(()=>{
    console.log("Proceso terminado");
});

/* 

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

fruit = stocks.fruits[1]
liquido = stocks.liquid[1]
contenedor = stocks.holder[1]
topping = stocks.toppings[1]

frappe(fruit, liquido, contenedor, topping)


fruit = stocks.fruits[3]
liquido = stocks.liquid[1]
contenedor = stocks.holder[1]
topping = stocks.toppings[3]

frappe(fruit, liquido, contenedor, topping)



fruit = stocks.fruits[2]
liquido = stocks.liquid[1]
contenedor = stocks.holder[2]
topping = stocks.toppings[1]

frappe(fruit, liquido, contenedor, topping) */