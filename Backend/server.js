const express=require("express")
const connectDb=require("./config/connectDb");
const dote=require("dotenv").config();
const usersRoute=require("./routes/usersRoute")
const contactRoute=require("./routes/contactRoute");
const app=express()
const errorHandler=require("./middleware/errorHandler")
const PORT=process.env.PORT||3000;

connectDb();

app.use(express.json());    //for getting the json format from the client
app.use("/api/contact",contactRoute);
app.use("/api/users",usersRoute);
app.use(errorHandler);
app.listen(PORT,()=>{
    console.log("App is listening in port:"+PORT);
})