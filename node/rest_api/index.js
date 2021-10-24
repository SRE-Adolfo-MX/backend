const { response } = require("express");
const express = require("express");
const app = express();
const port = 8000;
const faker = require("faker");

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
        ] */})
    } else {
        res.json({
            ok: false, 
            message: "El limite y la pagina son obligatorios",
        });
    }
});

// EJERCICIO 

app.get("/categories", (req, res) =>{
    const categor = []
    const { limit } = req.query;
    for (let i = 0; i < limit; i ++ ){
        categor.push({
            department: faker.commerce.department(),
            product: faker.commerce.product(),
            productDescription: faker.commerce.productDescription(),           
        });
    }
    if (limit) {
        res.json({
            ok: true,
            payload : categor,
        })
    } else {
        res.json({
            ok: false, 
            message: "El limite y la pagina son obligatorios",
        });
    }
});

app.get("/category/:id", (req, res) =>{
    //id = req.params.id;
    const {id} = req.params
    res.json({
        id,
        department: faker.commerce.department(),
        product: faker.commerce.product(),
        productDescription: faker.commerce.productDescription(),  
    })
})

app.get("/users", (req, res) =>{
    const users = []
    const { limit } = req.query;
    for (let i = 0; i < limit; i ++ ){
        users.push({
            name: faker.name.firstName(),
            lastName: faker.name.lastName(),
            jobTitle: faker.name.jobTitle(),        
        });
    }
    if (limit) {
        res.json({
            ok: true,
            payload : users,
        })
    } else {
        res.json({
            ok: false, 
            message: "El limite y la pagina son obligatorios",
        });
    }
});
 
app.get("/user/:id", (req, res) =>{
    //id = req.params.id;
    const {id} = req.params
    res.json({
        id,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        jobTitle: faker.name.jobTitle(), 
    })
})

// FIN EJERCICIO


app.get("/products/:id", (req, res) =>{
    //id = req.params.id;
    const {id} = req.params
    res.json({
        id,
        name: "Producto1",
        price: 1000,
    })
})


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
app.listen(port, ()=>{
    console.log("Listening on port:", port)
});