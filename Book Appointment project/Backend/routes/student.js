const ex=require("express");
const {route} = require("express/lib/application");
const Student=require("../models/student");
const router= ex.Router();



//get All the student
router.get("/", async (req,res)=>{
    try{ 
           const student_data= await Student.find({});
           res.json(student_data);
       }catch(error)
       {
            res.json(error);
       }
})


// get single student
router.get("/:studentid" , async(req,res)=>{

      const id=req.params.studentid;
      try{
              const student_id= await Student.findById(id);
              res.json(student_id);

      }catch(error)
      {
          res.json(error);
      }

})

// post the data
router.post("/", async (req,res)=>{
    try{ 
            const data= await Student.create(req.body);
            res.json(data);
       }catch(error)
       {
            res.json(error);
       }
})

// for delete student
router.delete("/:studentid" , async(req,res)=>{


     try{
             Student.remove({"_id":req.params.studentid});
             res.send("Deleted..........");
             

     }catch(error)
     {
         res.json(error);
     }

})


module.exports=router;