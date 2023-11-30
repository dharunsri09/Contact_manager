const express=require("express")
const {loginControl,registerControl,usersControl}=require("../controllers/userCtrl");
const validateTok = require("../middleware/validateTok");
const router=express.Router()

router.post("/login",loginControl);
router.post("/register",registerControl);
router.get("/user_details",validateTok,usersControl);

module.exports=router

