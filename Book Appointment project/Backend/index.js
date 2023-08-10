const express = require("express");
const app=express();
const student_router= require("./routes/student");
require("dotenv").config();
const mongoose= require("mongoose");
const bodyparser=require("body-parser");

app.use(bodyparser.json());
app.use("/", student_router);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_CONNECTION_URL,  ()=>{
    try{
    console.log("Database connected........");
    }
    catch(error)
    {
        console.log(error);
    }
});

// mongoose
//   .connect(process.env.DB_CONNECTION_URL)
//   .then(() => console.log("connected to db"))
//   .catch((e) => console.log(e));

app.listen(process.env.PORT, ()=>{
      console.log("server running");
})