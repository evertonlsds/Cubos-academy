const express = require("express");

const app = express();

//GET /instrutores
//GET / instrutores/5
//POST, Patch, PUT, DELETE

const listaDeInstrutores = [
    {   
        id:1,
        nome: "junior",
        idade: 29,
        areaDeAtuacao:"Logica"
    },
    {   
        id:2,
        nome: "Dina",
        idade: 19,
        areaDeAtuacao:"back-End"
    },
    {   
        id:3,
        nome: "Guido Cerqueira",
        idade: 30,
        areaDeAtuacao:"Full-Stack"
    },
    {   
        id:4,
        nome: "Victor Magalhaes",
        idade: 28,
        areaDeAtuacao:"Fron-End"
    }
];
app.get("/instrutores",(req, res)=>{
    res.json(listaDeInstrutores);
});

app.get("/instrutores/:idConsultado", (req, res)=>{
    req.params.idConsultado
    const instrutor = 
})

app.listen(8000);
