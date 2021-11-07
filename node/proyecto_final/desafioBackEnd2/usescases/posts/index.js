const postModel = require("../../models/posts").model;
const Post = require("../../models/posts");



const get = async (limit, date, word) => {

   if (limit) {
    limit = parseInt(limit);
    return await postModel.find({}, null, { limit }).exec();
   } else if (date) {
    value = date;
    return await postModel.find({datePost: { $regex: value }}).exec();
   } else if (word) {
     value = word
     return await postModel.find({contentPost: { $regex: value }}).exec();
   } else {
    return await postModel.find({}).exec();
   } 

};

const create = async (postData, idUser) => {
  const { postTitle, tags, imagePost, contentPost } = postData;
  const date = new Date();

  
  const post = new Post.model({
    idUser, 
    postTitle, 
    tags, 
    imagePost, 
    contentPost,
    datePost: date,
  });
  return await post.save();
};

const authenticate = async (user, password) => {
  const hash = user.password;

  return await encrypt.verifyPassword(password, hash);
};

const update = async (id, postId, postData) => {

  const { 
    postTitle, 
    tags, 
    imagePost, 
    contentPost } = postData;

  return await Post.model.findByIdAndUpdate(postId, {id, 
    postTitle, 
    tags, 
    imagePost, 
    contentPost}).exec();

};


  const del =  (idPost) => {
    return postModel.findByIdAndDelete(idPost).exec();

};

const getById = async (id) => {
  return await Post.model.findById(
    id,
    "idUser postTitle tags imagePost contentPost"
  ).exec();
};

module.exports = {
  get,
  create,
  authenticate,
  update,
  del,
  getById,
};