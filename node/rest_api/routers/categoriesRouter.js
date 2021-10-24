const { response } = require("express");
const express = require("express");
const faker = require("faker");

const router = express.Router()


router.get("/", (req, res, next) =>{
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

router.get("/:id", (req, res, next) =>{
    //id = req.params.id;
    const {id} = req.params
    res.json({
        id,
        department: faker.commerce.department(),
        product: faker.commerce.product(),
        productDescription: faker.commerce.productDescription(),  
    })
})

router.post('/', (req, res, next)=> {
    const body = req.body;
    res.status(201).json({
        ok: true,
        message: "Created category successfully",
        payload : {
            body,
        },
    });
})

router.patch("/:id", (req, res, next)=>{
    const {id} = req.params;
    const {department, product, productDescription} = req.body;

    if (id === "99"){
        res.status(404).json({
            ok: false,
            message: `Category not found`,
        })
    }else {

        
        res.status(201).json({
            ok: true,
            message: `Updated category ${id} successfully`,
            payload : {
                department,
                product,
                productDescription,
            },
        })

    }

})

router.delete("/:id", (req, res, next)=>{
    const {id}=req.params;
    res.status(202).json({
        ok: true,
        message: `Category ${id} deleted successfully`,
    })
})

module.exports = router;