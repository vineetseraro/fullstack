var express= require('express'); 
var app=express.Router();

app.get('/',function(request,response){
    response.send("server is runing")

});
app.get('/login',function(request,response){
    response.send("login")

});
app.get('/contact',function(request,response){
    const userData={
        username:request.body.username,
        email:request.body.email,
        phone:request.body.phone,
    }
    console.log("userData")
    response.send("contact")



});
module.exports=app