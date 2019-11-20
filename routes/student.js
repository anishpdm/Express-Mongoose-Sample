const Express=require('express')
var {studentModel} =require('../models/studentModel')



const router=Express.Router();

router.get('/viewAllapi',(req,res)=>{

    studentModel.find((error,data)=>{
if(error){
throw error;
}
else{

res.send(data);
}
    } )


})

router.post('/search',(req,res)=>{

   

        console.log(req.body)
    studentModel.find(req.body, (error,data)=>{
        if(error){
            throw error;
        }
        else{
            res.send(data)
        }
    })

})


router.post('/add',async (req,res)=>{

var student=new studentModel(req.body);
await student.save( (error,data)=>{

    if(error)
    {
        // res.send(error);
        res.json({"status":"error"});
        throw error;

    }
    else{
        res.json({"status":"success"});

    }

} )
   
})


router.get('/',(req,res)=>{
    res.send("geeello")
 
})



module.exports=router