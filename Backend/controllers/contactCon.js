const asyncHandler=require("express-async-handler");
const Contact=require("../models/contactMan");
const { default: mongoose } = require("mongoose");

//@desc getting the contact
//@url /api/contact

const getContact=asyncHandler( async (req,res)=>{
    const contact=await Contact.find({_id:req.user.id});
    res.status(200).json(contact);
});

//@desc getting the contact
//@url /api/contact

const postContact=asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const { name, email, number } = req.body;
    if (!name || !email || !number) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    const contact = await Contact.create({
      name,
      email,
      number,
      con_id:req.user.id,
    });
  
    res.status(201).json(contact);
  });

//@desc getting the contact
//@url /api/contact

const putContact=asyncHandler( async (req,res)=>{
    const con = await Contact.findById(req.params.id);
    const { name, email, number } = req.body;
    if(!name || !email || !number){
        res.status(404);
      throw new Error("Id not found in DB!");
    }
    else{
       if(con.con_id.toString()!=req.user.id){
            res.status(404);
          throw new Error("Id not found in DB!");
       }
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true},
        )
        res.status(200).json(contact);
    }
    
});


//@desc getting the contact
//@url /api/contact

const delContact=asyncHandler( async (req,res)=>{
    const body1= await Contact.findById(req.params.id);
    if(!body1){
        res.status(404);
      throw new Error("Id not found in DB!");
    }
    if(body1.con_id.toString()!=req.user.id){
      res.status(404);
    throw new Error("Id not found in DB!");
    }
    body1=await Contact.deleteOne({ _id: req.params.id });
    res.status(205).json(body1)
});


//@desc getting the contact
//@url /api/contact

const getContactid = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(200).json(contact);
  });



module.exports={getContact,postContact,putContact,delContact,getContactid};