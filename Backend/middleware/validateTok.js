const jwt=require("jsonwebtoken")
const asyncHandler = require("express-async-handler");

module.exports=asyncHandler(async (req,res,next)=>{
    
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader || authHeader[0]=="bearer"){
          var token=authHeader.split(" ")[1]
          jwt.verify(token,process.env.ACCESS_TOKEN,(err,decoded)=>{
            if(err){
                res.status(400);
                throw new Error("Token expired or invalid token");
            }
            else{
                req.user=decoded.user;
                console.log(req.user);
                next();
            }
          })
    
    }
    else{
        res.status(404);
        throw new Error("Token not found");
    }
})