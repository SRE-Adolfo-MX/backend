const jwt = require("../lib/jwt");

const authHandler = async (req, res, next) => {
  //const { auth  } = req.body.headers;
    const { token } = req.headers;
    //const { apitoken } = req.body;
    console.log(token)
    const tokenR = await jwt.verify(token);

    if (tokenR.role === "admin") {
      next();
    } else {
      res.status(403).json({
        ok: false,
        message: "Unauthorized",
      });
    }
  };
  
  module.exports = authHandler;