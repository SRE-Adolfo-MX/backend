const jsonwebtoken = require("jsonwebtoken");

const sign = async (payload) => {
  const secret = process.env.SECRET;
  //console.log(secret)
  return await jsonwebtoken.sign(payload, secret, {expiresIn: "1h"});
};

const verify = async (token) => {
  const secret = process.env.SECRET;

  try {
    return await jsonwebtoken.verify(token, secret);
  } catch (error) {
    console.log("Token invalido")
  }
  //return await jsonwebtoken.verify(token, secret);
};

module.exports = {
  sign,
  verify,
};
