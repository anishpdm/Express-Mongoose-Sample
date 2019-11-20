const Express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose');




var app = Express()

var studentrouter = require('./routes/student.js')


// app.set('view engine','ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/student',studentrouter)

mongoose.connect("mongodb+srv://anishsnair:hello12345@cluster0-rqfpy.mongodb.net/test?retryWrites=true&w=majority")


//mongoose.connect("mongodb://localhost:27017/MyCollegeDb")









app.listen(process.env.PORT || 3001,()=>{
    console.log('Server Started')
})