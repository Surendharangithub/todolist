const mongoose = require("mongoose")

const mongooseConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((con)=>{
        console.log(`successfully connected to ${con.connection.port}`)
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = mongooseConnect 