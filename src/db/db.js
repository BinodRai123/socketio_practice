const mongoose = require("mongoose");

function connectToDB(){

    mongoose.connect(process.env.DB_URL).then(() => {
        console.log("db is connected");
    }).catch((error) => {
        console.log("Error :", error)
    })

}

module.exports = connectToDB;