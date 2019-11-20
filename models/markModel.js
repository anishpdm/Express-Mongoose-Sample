var mongoose=require('mongoose');


const markSchema = new mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Students'
    },
    mark_physics : Number,
    mark_chemistry : Number,
    mark_biology : Number

})

var markModel = mongoose.model('marks', markSchema);

module.exports={markModel}