const Express=require('express')
var bodyParser=require('body-parser')

const Mongoose= require('mongoose');



var app = Express()

var studentrouter = require('./routes/student.js')


// app.set('view engine','ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/student',studentrouter)


Mongoose.connect("mongodb://localhost:27017/collegedb");




app.listen(3000,()=>{
    console.log('Server Started')
})