const express = require("express")
//creat mongoose

require("./config/mongoose")
//creat the app
let app = express()
const routes = require("./config/route")
app.use(express.urlencoded({extended:false}))
app.use(express.json())




//set a view 
app.set("view engine" , "ejs")
app.use(routes)


// we need app to use the routes

//listen to the port    
app.listen(3000 , ()=>console.log("server is---LIVE"))