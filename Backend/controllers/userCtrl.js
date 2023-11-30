const User=require("../models/usersModel")
const jwt=require("jsonwebtoken")
const asyncHandler=require("express-async-handler");
const bcrypt=require("bcrypt")
const loginControl=asyncHandler(async (req,res)=>{
    const {email,password}=req.body;
    if (!password || !email) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const user=await User.findOne({email});
    if(user && bcrypt.compare(password,user.password)){
        const token=jwt.sign(
                {
                  user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                  },
                },
                process.env.ACCESS_TOKEN,
                { expiresIn: "15m" }
              );
        res.status(200).json({"token":token});
        }
});


const registerControl=asyncHandler(async (req,res)=>{
    const {userName,email,password,number}=req.body;
    if (!userName || !email || !number || !password) {
        res.status(400);
        throw new Error("All fields are mandatory !");
      }
    const userFound=await User.findOne({email});
    if(userFound){
        res.status(400);
        throw new Error("Already in the deck man,are in the booze");
    }
    const passwordE=await bcrypt.hash(password,10);
    const data=await User.create({
        userName,
        email,
        password:passwordE,
        number
    })
    res.status(200).json(data);
});


const usersControl=asyncHandler(async (req, res) => {
    res.json(req.user);
  });

module.exports={loginControl,registerControl,usersControl};