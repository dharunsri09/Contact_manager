const express=require("express")
const {getContact,putContact,postContact,delContact,getContactid}=require("../controllers/contactCon");
const validateTok = require("../middleware/validateTok");
const router=express.Router();
router.use(validateTok)
router.route("/").get(getContact).post(postContact)
router.route("/:id").delete(delContact).get(getContactid).put(putContact)

module.exports=router;