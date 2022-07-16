
const mongoose = require("mongoose");

const connectDb = (url) => {
    return mongoose .connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}

module.exports = connectDb




    // .then(() => console.log("database is connected"))
    // .catch((err) => {console.log(err)})