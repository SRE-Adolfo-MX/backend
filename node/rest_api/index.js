const { response } = require("express");
const express = require("express");
const app = express();
const port = 8000;
const apiRouter = require("./routers")
const {logErrors, errorHandler} = require("./middlewares/errorHandlers")
const db = require("./lib/db");
const authHandler = require("./middlewares/authHandlres");


//app.use(authHandler);

app.use(express.json())
//const faker = require("faker");


app.get("/", (request, response) =>{
    response.send("HELLO WORLD!")
});

app.get("/nueva-ruta", (req, res) =>{
    res.send("<h1>Otra Ruta</h1>")
})


/* app.get("/products", (req, res) =>{
    res.json({
        name: "Product 1",
        price: 1000,
    });
}) */

/*
app.get("/products", (req, res) =>{
    const products = []
    const { limit } = req.query;
    for (let i = 0; i < limit; i ++ ){
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl(),
        });
    }
    //const {limit} = req.query
    if (limit) {
        res.json({
            ok: true,
            payload : products,/* [
            {
                name: `Product 1`,
                price: 1000,
                limit,
            },
            {name: "Product 2", price: 2000}
        ] })
    } else {
        res.json({
            ok: false, 
            message: "El limite y la pagina son obligatorios",
        });
    }
});
*/
// EJERCICIO 




// FIN EJERCICIO


/* app.get("/products/:id", (req, res) =>{
    //id = req.params.id;
    const {id} = req.params
    res.json({
        id,
        name: "Producto1",
        price: 1000,
    })
}) */


/* app.get("/category/:categoryId/product/:productId", (req, res) =>{
    const {categoryId, productId} = req.params;
    res.json({
        productId,
        categoryId,
        name: `Producto ${productId}`,
        price: 1000,
    })
})
 */


apiRouter(app);


app.use(logErrors);
app.use(errorHandler);

app.listen(port, ()=>{

    console.log("Listening on port:", port)
    db.connect().then(()=>{
        console.log("DB Connect");
    }).catch((err)=> {
        console.error("Connection error", err)
    })

});