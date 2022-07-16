class Custom extends Error {
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const customFun = (msg, statusCode) => {
    return new Custom(msg, statusCode)
}

module.exports = {Custom, customFun}