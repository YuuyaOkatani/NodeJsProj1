var express = require("express"); 
var app = express();




app.listen(8181, (res) =>{
    if(res){
        console.log("Erro ao iniciar o servidor");
    }
    else{
        console.log("Servidor rodando na porta 8181");
        console.log("URL: http://localhost:8181");
        
    }
    
    
})

app.get("/", (req, res) => {
    res.send("Olá, Mundo!");

})

app.get("/blog", (req, res) => {
    res.send("Posts do Blog");
})

app.get("/youtube", (req, res) => {
    res.send("Vídeos do YouTube");
})

app.get("/contato/:nome?", (req, res) => {
    var nome = req.params.nome; 
    if(nome){
        res.send("Contato de: " + nome);
    }
    else{
        res.send("Contato sem nome");
    }
})