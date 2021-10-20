let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };
  
  // preparación del frappe
  //

  //console.log(stocks.fruits)

const colocarOrden = async (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(param.status.order_placed)
            param.status.order_placed = true;
            console.log("Se comenzo la order:", param)
            //console.log(`Se comenzo con la orden ${param}`);
            resolve(param); //este es el parametro que le manda la variable a la siguiente funcion
        }, 2000);
    })
};

const cortarFruta = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let fruta = stocks.fruits[param]
            //console.log(`Se corto la fruta ${fruta}`);
            param.status.fruit_chopped = true;
            console.log("Se corto la fruta status:", param)
            resolve(param); //este es el parametro que le manda la variable a la siguiente funcion
        }, 2000);
    })
};

const anadirAguaHielo = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let liquid = stocks.liquid[param]
            //if (liquid) {
                //console.log(`Se uso el liquido: ${liquid}`);
                param.status.liquid_added = true;
                console.log("Se agrego liquido status:", param)
                resolve(param);
            //} else {
                //reject(`La bebida con posicion: ${param} no existe`);
            //}
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
/* 
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
}); */


let frappeOrder = {
    Orden: 1,
    status : {
        order_placed: false,
        fruit_chopped: false,
        liquid_added: false,
    }
};

const main = async () => {
    await colocarOrden(frappeOrder);
    await cortarFruta(frappeOrder);
    await anadirAguaHielo(frappeOrder);
}

main()