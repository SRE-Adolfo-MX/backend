const mongoose = require("mongoose");

const { Schema } = mongoose;

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const schema = new Schema({
  firstName: {
    type: String,
    required: false,
    trim: true,
    maxlength: 20,
    minlength: 1,
  },
  lastName: {
    type: String,
    required: false,
    trim: true,
    maxlength: 20,
    minlength: 1,
  },
  username: {
    type: String,
    required: false,
    trim: true,
    maxlength: 50,
    minlength: 1,
    unique: true,
  },
  role: {
    type: String,
    required: false,
    trim: true,
    maxlength: 50,
    minlength: 1,
    unique: false,
  },
  password: {
    type: String,
    required: true,
    minlength: 1,
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  avatar: {
    type: String,
    required: false,
    trim: true,
    maxlength: 500,
    minlength: 1,
    unique: false,
  },
});

module.exports = {
  model: mongoose.model("userDevTo", schema),
  schema,
};