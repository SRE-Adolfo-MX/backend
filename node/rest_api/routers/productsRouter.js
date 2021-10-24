const { response } = require("express");
const express = require("express");
const faker = require("faker");

const router = express.Router()

router.get("/", (req, res) =>{
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

router.get("/:id", (req, res, next) =>{
    //id = req.params.id;
    const {id} = req.params
    try {
        throw "Error Generico";
    } catch (error) {
        next(error);
    }
/*     res.json({
        id,
        name: "Producto1",
        price: 1000,
    }) */
});

router.post('/', (req, res)=> {
    const body = req.body;
    res.status(201).json({
        ok: true,
        message: "Created successfully",
        payload : {
            body,
        },
    });
})

router.patch("/:id", (req, res)=>{
    const {id} = req.params;
    const {name, price} = req.body;

    if (id === "99"){
        res.status(404).json({
            ok: false,
            message: `Product not found`,
        })
    }else {

        
        res.status(201).json({
            ok: true,
            message: `Updated ${id} successfully`,
            payload : {
                name,
                price,
            },
        })

    }

})

router.delete("/:id", (req, res)=>{
    const {id}=req.params;
    res.status(202).json({
        ok: true,
        message: `Product ${id} deleted successfully`,
    })
})

module.exports = router;