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
    description:{
        type: String,
        require: true,
        trim: true,
        maxlenght: 1000,
        minlenght: 1
    },
});

module.exports = {
    model: mongoose.model("Categories", schema),
    schema,
};