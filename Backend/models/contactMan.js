const mongoose=require("mongoose");
const Contactschme=mongoose.Schema({
    name:{
        type:String,
        required:(true,"Please fill the name"),
    },
    email:{
        type:String,
        required:(true,"Please fill the email"),
    }
    ,
    number:{
        type:String,
        required:(true,"Please fill the number"),
    }
    ,
    con_id:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})

module.exports=mongoose.model("Contact",Contactschme);