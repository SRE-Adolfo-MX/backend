const { response } = require("express");
const express = require("express");
const faker = require("faker");
const authHandler = require("../middlewares/authHandlres");
const product = require("../usescases/products")


const router = express.Router()

router.get("/", async (req, res, next) => {
    const products = [];
    const { limit } = req.query;
  
    try {
      const products = await product.get();
      res.json({
        ok: true,
        message: "Done!",
        payload: { products },
      });
    } catch (error) {
      next(error);
    }
  });
 
router.get("/:id", (req, res, next) =>{
    const {id} = req.params
    try {
        throw "Error Generico";
    } catch (error) {
        next(error);
    }
}); 

router.use(authHandler);

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

/* module.exports = {
    get,
    getByID,
    del,
    update,
};  */