var mongoose = require('mongoose');
var StudentsModel=mongoose.model('Students',{
    name:{
    type: String,
    required:true,
    minlength:1,
    trim:true
    },
    college:{
    type: String,
    required:true
    },
    rollno:{
        type:Number
    },
    admno:{
        type:String
    }
    
    });

    module.exports={StudentsModel}