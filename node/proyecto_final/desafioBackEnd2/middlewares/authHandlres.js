const jwt = require("../lib/jwt");

const authHandler = async (req, res, next) => {
  const { token } = req.headers;
  try {
    req.params.tokenPayload = await jwt.verify(token);
    next();
  } catch (err) {
    res.status(403).json({
      ok: false,
      message: err.message,
    });
  }
};

module.exports = {authHandler};