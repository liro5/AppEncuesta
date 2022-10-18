var express = require("express"); 
var fs = require("fs");
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
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


app.post("/agregarEncuesta", jsonParser,function (req, res) {
    console.log("error");
    fs.readFile(__dirname + "/" + "encuesta.json", 'utf-8', function (err, data) {
       console.log(data);
       data = JSON.parse(data);
       const fechaH = new Date();
       let Id = fechaH.getTime().toString() + Math.floor(Math.random() * 150).toString();
       let IdK = btoa(Id);
       data[IdK] = req.body;
       res.end(JSON.stringify(data));
       fs.writeFile(__dirname + "/" + "encuesta.json", JSON.stringify(data), 'utf8', function (err) {
          if (err) return console.log(err);
       });
    });
 })



var server = app.listen(8081, function(){
   var host = server.address().address
   var port = server.address().port
   console.log("Servidor en la ruta: http://localhost:%s",port);
} );