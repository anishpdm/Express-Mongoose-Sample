const Express=require('express')

var {StudentsModel}=require('../models/studentModel');




const router=Express.Router();

router.post('/add',(req,res)=>{

    var student=new StudentsModel(req.body);
    student.save();

   
    res.send(req.body)
})


router.get('/',(req,res)=>{
    res.send("geeello")
 
})



module.exports=router