var express=require('express');
var myapp=new express();

myapp.use(function(req,res,next){
res.setHeader('Access-Control-Allow-Origin','*');


})

myapp.get('/v1/users',function(req,res){

 


});
	