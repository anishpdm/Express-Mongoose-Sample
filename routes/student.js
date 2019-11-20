const Express=require('express')
var {studentModel} =require('../models/studentModel')

var {markModel} =require('../models/markModel')


const router=Express.Router();

router.post('/update',(req,res)=>{

studentModel.findOneAndUpdate({admno:req.body.admno},req.body,(error,data)=>{


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


router.get('/getmarks',async (req,res)=>{
    studentModel.aggregate([

            {  $lookup: {
                  from: "marks", // collection to join
                  localField: "_id",//field from the input documents
                  foreignField: "studentId",//field from the documents of the "from" collection
                  as: "marks"// output array field
              }
  
          }],(error, data)=> {
           return res.json(data);
       //handle error case also
      });
})

router.post('/addmarks',async (req,res)=>{

    var mark=new markModel(req.body);
    await mark.save( (error,data)=>{
    
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