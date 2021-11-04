const express = require("express");
const users = require("../usescases/users");
const jwt = require("../lib/jwt");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const { token } = req.body;
  const tokenR = await jwt.verify(token);
  if (tokenR.role === "admin") {
    try {
      const allUsers = await users.get();
      res.json({
          ok: true,
          message: `All Users`,
          payload: allUsers,
      });
      } catch (error) {
        next(error);
      }
  } else {
    res.status(403).json({
      ok: false,
      message: "Unauthorized",
    });
  }
});

router.get("/:id", async (req, res, next) => {
 const {username} = req.body;
  try {
      const userName = await users.getByUsername(username);
      res.json({
          ok: true,
          message: `userName ${username}`,
          payload: userName,
      });
  } catch (error) {
      next(error);
  }
});


router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, username, role, password, email } = req.body;

    const createdUser = await users.create({
      firstName,
      lastName,
      username,
      role,
      password,
      email,
    });

    res.status(201).json({
      ok: true,
      message: "User created successfully",
      payload: createdUser,
    });
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { firstName, 
          lastName, 
          username, 
          role,
          token, 
          password, 
          email } = req.body;

  const tokenR = await jwt.verify(token);
  console.log(tokenR)
  if (tokenR.role === "admin" || id === tokenR.sub) {
    try {
      const userData = req.body;
      const userUpdated = await users.update(id,{firstName, 
        lastName, 
        username, 
        role, 
        password, 
        email});

      res.status(201).json({
        ok: true,
        message: "User updated",
        payload: {
          product: userUpdated,
        },
      });
    } catch (error) {
      next(error);
    }
  } else {
    res.status(403).json({
      ok: false,
      message: "Unauthorized",
    });
  }
});


router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  const {token} = req.body;

  const tokenR = await jwt.verify(token);
  console.log(tokenR)


  if (tokenR.role === "admin" || id === tokenR.sub) {
    try {
      const productDeleted = await users.del(id);

      res.status(201).json({
        ok: true,
        message: "User Deleted",
        payload: {
          product: productDeleted,
        },
      });
    } catch (error) {
      next(error);
    }
  } else {
    res.status(403).json({
      ok: false,
      message: "Unauthorized",
    });
  }
});

module.exports = router;