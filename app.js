var http = require("http");

http.createServer(function(req, res){
    res.end("Bem vindo ao site!");
    console.log("Requisição recebida");
}).listen(8181); 


    