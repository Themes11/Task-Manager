const express = require("express");
const app = express();
const port = 3000;
const task = require("./routes/tasks")
const connectDb = require("./db/connect")
const bodyparser = require("body-parser");
const { notfound } = require("./middleware/notfound");
const { errorhandler } = require("./middleware/errorhandler");
require("dotenv").config()
app.use(express.json())
app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static("./public"))
app.use("/api/v1/tasks", task);
app.use(notfound);
app.use(errorhandler)




const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, () => console.log("Server is listening"))
    } catch (error) {
        console.log(error)
    }
}

start()


