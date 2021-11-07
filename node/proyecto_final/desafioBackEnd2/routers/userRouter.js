const express = require("express");
const users = require("../usescases/users");
const jwt = require("../lib/jwt");
const { authHandler } = require("../middlewares/authHandlres");
const permissionHandlers = require("../middlewares/permissionHandlers");

const router = express.Router();

router.post ("/", 
async (request, response, next)=> {
  try { 
    const userData= request.body; 
    const userCreated= await users.create(userData);

    response.status(201).json({ 
      ok:true,
      message: "New user created", 
      payload: userCreated,
      
    });
  }catch (error){
    next(error);
  }
}); 

router.get(
  "/",
  authHandler,
  permissionHandlers.adminHandler,
  async (req, res, next) => {
    try {
      const { limit } = req.query;

      const payload = await users.get(limit);

      res.status(200).json({
        ok: true,
        message: "Done!",
        payload,
      });
    } catch (err) {
      next(err);
    }
  }
);

router.get(
  "/:id",
  authHandler,
  permissionHandlers.sameUserHandler,
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const payload = await users.getById(id);

      res.status(200).json({
        ok: true,
        message: "Done!",
        payload,
      });
    } catch (err) {
      next(err);
    }
  }
);

router.patch("/:id", 
authHandler,
permissionHandlers.sameUserHandler,
async (request, response, next)=> {
  try {
    const {id}= request.params;
    const userData= request.body;
    const userUpdate= await users.update(id, userData); 
    response.json({
      ok:true,
      message: "User updated successfully",
      payload:{
        user: userUpdate,
      }
    })
  }catch (error){
    next (error);
  }
});

module.exports = router;