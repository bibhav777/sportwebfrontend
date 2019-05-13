var express=require('express');
var myapp=new express();
//var test =require('./models/Usermodels');
var bodyParser=require('body-parser');


myapp.use(function(req,res,next){
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

next();


})

myapp.use(bodyParser.json());
myapp.post('/v1/users',function(req,res){
console.log(req.body);
});
	
myapp.listen(3001); 	