const { asyncController } = require("../middleware/async");
const {customFun} = require("../errors/errorclass")
const errorhandler = require("../middleware/errorhandler")
const Task = require("../models/task")
exports.createTask = asyncController( async (req, res) => {
    const task = await Task.create({name : req.body.name});
    res.status(201).json({task})
   
});

exports.getTask = asyncController( async (req, res, next) => {
    const task = await Task.findOne({_id: req.params.id});
    if(!task){
        // const error = new Error("File not found")
        // error.status = 404
        // return next(error)
        return next(customFun("File not found", 404))
    }
    res.status(200).json({task})
});

exports.getAllTask = asyncController(async (req, res) => {
    const tasks = await Task.find({});
    res.status(201).json({tasks})
});

exports.deleteTask = asyncController(async (req, res) => {
    const task = await Task.findOneAndDelete({_id: req.params.id});
    if(!task){
        return next(customFun("The task to be deleted cannot be found", 404))
    }
    res.status(200).json({task})
    
});

exports.updateTask = asyncController(async (req, res) => {
    const task = await Task.findOneAndUpdate({_id: req.params.id}, req.body, {
         new: true,
         runValidators: true
     });
    res.status(200).json({task})
});