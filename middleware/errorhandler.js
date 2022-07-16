const {Custom} = require("../errors/errorclass")
exports.errorhandler = (err, req, res, next) => {
    // console.log(err)
    // return res.status(err.status).send({msg: err.message})
    if(err instanceof Custom){
        return res.status(err.statusCode).json({"msg": err.message})
    }
    res.status(500).json({"msg": "Something went wrong"})
}