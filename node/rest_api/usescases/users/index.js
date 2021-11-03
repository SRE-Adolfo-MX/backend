const userModel = require("../../models/users").model;
const User = require("../../models/users");
const encrypt = require("../../lib/encrypt");


const get = async () => {
  const allUsers = await userModel.find({}).exec();

  return allUsers;
};

const create = async (userData) => {
  const { firstName, lastName, username, role, password, email } = userData;

  const hash = await encrypt.hashPassword(password);

  const user = new User.model({
    firstName,
    lastName,
    username,
    role,
    password: hash,
    email,
  });
  return await user.save();
};

const getByUsername = async (username) => {
  return await User.model.findOne({ username }).exec();
};

const authenticate = async (user, password) => {
  const hash = user.password;

  return await encrypt.verifyPassword(password, hash);
};

module.exports = {
  get,
  create,
  getByUsername,
  authenticate,
};