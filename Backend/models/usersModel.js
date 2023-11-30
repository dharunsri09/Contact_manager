const mongoose=require("mongoose")

const User=mongoose.Schema({
        userName:{
            type:"String",
            required:true,
        },
        email:{
            type:"String",
            required:true,
        },
        password:{
            type:"String",
            required:true,
        },
        number:{
            type:"String",
            required:true
        }
    }
    ,
    {
        timestamps:true,
    }
    )


module.exports=mongoose.model("User",User);