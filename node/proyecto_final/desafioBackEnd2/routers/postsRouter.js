const express = require("express");
const posts = require("../usescases/posts");
const jwt = require("../lib/jwt");
const { authHandler } = require("../middlewares/authHandlres");
const permissionHandlers = require("../middlewares/permissionHandlers");

const router = express.Router();

router.post ("/",
async (request, response, next)=> {
  try { 
    const { token } = request.headers;
    const tokenR = await jwt.verify(token);
    const id = tokenR.sub;
    const postData= request.body; 
    const postCreated= await posts.create(postData, id);

    response.status(201).json({ 
      ok:true,
      message: "New post created", 
      payload: postCreated,
      
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
        const { date } = req.query;
        const { word } = req.query;
        const payload = await posts.get(limit, date, word);
  
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
    async (req, res, next) => {
        console.log("entra")
      try {
        const { id } = req.params;
  
        const payload = await posts.getById(id);
  
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

  router.patch("/:id/:postId", 
  authHandler,
  permissionHandlers.sameUserHandler,
  async (request, response, next)=> {
    try {
      const {id}= request.params;
      const {postId}= request.params;
      const postData= request.body;
      const postUpdate= await posts.update(id, postId, postData); 
      response.json({
        ok:true,
        message: "Post updated successfully",
        payload:{
          user: postUpdate,
        }
      })
    }catch (error){
      next (error);
    }
  });

  router.delete("/:id/:postId", 
  authHandler,
  permissionHandlers.sameUserHandler,
  async (req, res, next) => {
    const { id } = req.params;
    const {postId}= req.params;
    try {
        const productDeleted = await posts.del(postId);

        res.status(201).json({
          ok: true,
          message: "Post Deleted",
          payload: {
            product: productDeleted,
          },
        });
      } catch (error) {
        next(error);
      }
  });

module.exports = router;