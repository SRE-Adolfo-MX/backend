/*
Listar todos los productos
ver los detalles del producto por ID
crear un nuevo producto
eliminar un producto
actualizar los detalles de un producto
*/


const Product = require("../../models/product").model;

const get = async () => {
    const allProducts = await Product.find({}).exec();

    return allProducts;
};


const getById = async (productID) => {
    const product = await Product.findById(productID).exec();

    return product;
};


const create = async (productData) => {

    const { name, price } = productData;
    
    const product = new Product({name, price});

    const savedProduct = await product.save();

    return savedProduct;
};

const del =  (productID) => {
    return Product.findByIdAndDelete(productID).exec();

};

const update = async (productID, productData) => {

    const {name, price} = productData;
   return Product.findByIdAndUpdate(productID, {name, price}).exec();

};

module.exports = {
    get,
    getById,
    create,
    del,
    update,
  };