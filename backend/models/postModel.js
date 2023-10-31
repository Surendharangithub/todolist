const mongoose = require("mongoose")

const postSchema  =mongoose.Schema({
    text:{
        type:String,
    },
    createdAt:{
        type:Date,
        default :Date.now()
    }
})

const postmModel = mongoose.model('post',postSchema)

module.exports = postmModel