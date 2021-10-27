const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
    name:{
        type: String,
        require: true,
        trim: true,
        maxlenght: 20,
        minlenght: 1
    },
    Price:{
        type: Number,
        require: true,
    },
});

module.exports = {
    model: mongoose.model("Product", schema),
    schema,
};