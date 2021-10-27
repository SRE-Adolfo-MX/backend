const mongoose = require("mongoose");

const connect = () => new Promise((resolve, reject)=>{
    mongoose.connect(
        'mongodb+srv://jsAdmin:CiC3rXmZTRkj5cMC@cluster0.ctuv0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
    }
    );

    const db = mongoose.connection;

    db.on("open", () => {
        console.log("Connection successfull");
        resolve(mongoose);
    });

    db.on("error", (error) => {
        console.error("Concention failed", error);
        reject(error);
    });
});


module.exports = {
    connect,
};