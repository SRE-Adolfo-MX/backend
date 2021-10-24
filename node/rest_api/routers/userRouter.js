const express = require("express");
const router = express.Router();
const faker = require("faker");


router.get("/", (req, res) =>{
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
 
router.get("/:id", (req, res) =>{
    //id = req.params.id;
    const {id} = req.params
    res.json({
        id,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        jobTitle: faker.name.jobTitle(), 
    })
})


router.post('/', (req, res, next)=> {
    const body = req.body;
    res.status(201).json({
        ok: true,
        message: "Created user successfully",
        payload : {
            body,
        },
    });
})

router.patch("/:id", (req, res, next)=>{
    const {id} = req.params;
    const {name, lastName, jobTitle} = req.body;

    if (id === "99"){
        res.status(404).json({
            ok: false,
            message: `User not exist`,
        })
    }else {

        
        res.status(201).json({
            ok: true,
            message: `Updated user ${id} successfully`,
            payload : {
                id,
                name,
                lastName,
                jobTitle, 
            },
        })

    }

})

router.delete("/:id", (req, res, next)=>{
    const {id}=req.params;
    res.status(202).json({
        ok: true,
        message: `User ${id} deleted successfully`,
    })
})

module.exports = router;
