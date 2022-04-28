import express,{Request,Response} from "express"
import {loginRoutes} from "./routes/loginRoutes"
import bodyParser from "body-parser"

const app  = express()


//use loginRoutes
app.use(loginRoutes)
app.use(bodyParser.urlencoded({extended:true}))



app.listen(3000,()=>{
    console.log("app is Running on 3000");
    
})