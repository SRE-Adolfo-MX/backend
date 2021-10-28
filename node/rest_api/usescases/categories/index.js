/*
Listar todos los productos
ver los detalles del producto por ID
crear un nuevo producto
eliminar un producto
actualizar los detalles de un producto
*/


const Category = require("../../models/categories").model;

const get = async () => {
    const allCategories = await Category.find({}).exec();

    return allCategories;
};


const getById = async (categoryID) => {
    const category = await Category.findById(categoryID).exec();

    return category;
};


const create = async (categoryData) => {

    const { name, description } = categoryData;
    
    const category = new Category({name, description});

    const savedCategory = await category.save();

    return savedCategory;
};

const del =  (categoryID) => {
    return Category.findByIdAndDelete(categoryID).exec();

};

const update = async (categoryID, categoryData) => {

    const {name, description} = categoryData;
   return Category.findByIdAndUpdate(categoryID, {name, description}).exec();

};

module.exports = {
    get,
    getById,
    create,
    del,
    update,
  };