const { response } = require("express");
const express = require("express");
const faker = require("faker");
const authHandler = require("../middlewares/authHandlres");
const category = require("../usescases/categories");

const router = express.Router()


router.get("/", async (req, res, next) =>{
    const categor = []
    const { limit } = req.query;

    try {
        const categories = await category.get();
        res.json({
          ok: true,
          message: "Done GET-ALL!",
          payload: { categories },
        });
      } catch (error) {
        next(error);
      }
});

router.get("/:id", async (req, res, next) => {
    const { id } = req.params;

    try {
        const categoryID = await category.getById(id);
        res.json({
            ok: true,
            message: `Done! ${id}`,
            payload: categoryID,
        });
    } catch (error) {
        next(error);
    }
});

router.use(authHandler);

router.post("/", async (req, res, next) => {
    try {
        const categoryData = req.body;
        const categoryCreated = await category.create(categoryData);

        res.status(201).json({
        ok: true,
        message: "New category created",
        payload: {
            product: categoryCreated,
        },
        });
    } catch (error) {
        next(error);
    }
});

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