const mongoose = require("mongoose");
const schema =mongoose.Schema


const posts= new schema ({
    title:{
        type : String ,
        required : false,
    }, 
    desc:{
        type : String ,
        required : false,
    }
})

module.exports=mongoose.model("post" , posts)