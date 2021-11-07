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
        message: "Done GET-ALL!",
        payload: { products },
      });
    } catch (error) {
      next(error);
    }
  });
 
router.get("/:id", async (req, res, next) => {
    const { id } = req.params;

    try {
        const productID = await product.getById(id);
        res.json({
            ok: true,
            message: `Done! ${id}`,
            payload: productID,
        });
    } catch (error) {
        next(error);
    }
});

// router.use(authHandler);

router.post("/", async (request, response, next) => {
    try {
      const productData = request.body;
      const productCreated = await product.create(productData);
  
      response.status(201).json({
        ok: true,
        message: "New product created",
        payload: {
          product: productCreated,
        },
      });
    } catch (error) {
      next(error);
    }
  });



  router.patch("/:id", async (req, res, next) => {
    const { id } = req.params;
    const { name, price } = req.body;
    
    try {
        const productData = req.body;
        const productUpdated = await product.update(id,{name, price});

        res.status(201).json({
          ok: true,
          message: "Product updated",
          payload: {
            product: productUpdated,
          },
        });
      } catch (error) {
        next(error);
      }
  });
  

  router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;

    try {
        const productDeleted = await product.del(id);

        res.status(201).json({
          ok: true,
          message: "Product Deleted",
          payload: {
            product: productDeleted,
          },
        });
      } catch (error) {
        next(error);
      }
  });

module.exports = router;

/* module.exports = {
    get,
    getByID,
    del,
    update,
};  */