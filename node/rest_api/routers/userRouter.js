const express = require("express");
const users = require("../usescases/users");

const router = express.Router();

router.get("/", async (req, res, next) => {
 
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

module.exports = router;