const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    completed: {
        default: false
    }
})

module.exports = mongoose.model("Task", TaskSchema)