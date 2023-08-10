const mongoose=require("mongoose");

const student=mongoose.Schema({
         name:{
             type:String,
             require:true
         },
         email:{
            type:String,
             require:true
         },
         number:{
            type:String,
             require:true
         }
})

module.exports=mongoose.model("student",student);