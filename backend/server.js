const app = require("./app")
const mongooseConnect = require("./config/databse")
const path = require("path")
const dotenv = require("dotenv")



dotenv.config({path:path.join(__dirname,"./config/config.env")})

mongooseConnect()

app.listen(process.env.PORT,()=>{
        console.log(`server is listening to the port : ${process.env.PORT} in ${process.env.NODE_ENV}`)
})