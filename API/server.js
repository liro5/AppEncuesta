var express = require("express"); 
var fs = require("fs");
var app = express();

app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","http://localhost:4200");
    res.setHeader("Access-Control-Allow-Methods","GET, POST");
    res.setHeader("Access-Control-Allow-Headers","x-requested-with, content-type");
   
    next();
} );


app.get("/darPreguntas", function(rep,res){
   fs.readFile(__dirname + "/preguntas.json","utf-8",function(err,data){
       res.end(data);
   } );
});



var server = app.listen(8081, function(){
   var host = server.address().address
   var port = server.address().port
   console.log("Servidor en la ruta: http://localhost:%s",port);
} );