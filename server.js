const { request } = require('express');
var express= require('express'); 
var mongoose=require('mongoose')
var app=express();
var bodyParser=require('body-parser')
var cors=require('cors')
var routes=require("./router/router")

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)

const mongoURI='mongodb+srv://admin:admin@cluster0.ykxm7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(
    mongoURI,
    {
        useNewUrlParser:true
    }
)
.then(function(){
    console.log("db is connected")
})
app.use("/routes",routes)
app.listen(8080,function(){
    console.log("everything is okay")
})
