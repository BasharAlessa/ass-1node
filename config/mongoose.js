const mongoose = require("mongoose")

 mongoose.connect("mongodb+srv://Essa993:Essa993@cluster0.obpe4uf.mongodb.net/")
 .then(()=>console.log("DB is---LIVE "))
 .catch(err =>console.log(err))