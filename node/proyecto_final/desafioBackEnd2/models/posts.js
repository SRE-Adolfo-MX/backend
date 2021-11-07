const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema({
  idUser: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
    minlength: 1,
    unique: false,
  },
  postTitle: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
    minlength: 1,
    unique: false,
  },
  tags: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
    minlength: 1,
    unique: false,
  },
  imagePost: {
    type: String,
    required: false,
    trim: true,
    maxlength: 500,
    minlength: 1,
    unique: false,
  },
  contentPost: {
    type: String,
    required: false,
    trim: true,
    maxlength: 1500,
    minlength: 1,
    unique: false,
  },
  datePost: {
    type: Date,
    required: true,
  },
});

module.exports = {
  model: mongoose.model("postsDevTo", schema),
  schema,
};