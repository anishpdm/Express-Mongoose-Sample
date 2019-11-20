var mongoose=require('mongoose');

var studentSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        admno:Number,
        rollno:Number,
        college:String,
        addedDate:{
            type:Date,
            default:Date.now
        }
   
        }
)

var studentModel = mongoose.model('Students',studentSchema) 

module.exports={studentModel}