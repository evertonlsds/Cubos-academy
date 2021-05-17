const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json());
app.use(express.json());



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
        areaDeAtuacao:"Front-End"
    }
    
    
];

        let proximoId = 5;

app.get("/instrutores",(req, res)=>{
    res.json(listaDeInstrutores);
});

app.get("/instrutores/:idConsultado", (req, res)=>{
    req.params.idConsultado
    const instrutor = listaDeInstrutores.find(instrutor => instrutor.id === Number(req.params.idConsultado));
    res.json(instrutor);
})

//POST/instrutores |criar Novos recursos na coleção.|

app.post("/instrutores/", (req, res)=>{
    console.log(req.body);
    
    const novoInstrutor ={
        id: proximoId,
        nome: req.body.nome,
        idade: req.body.idade,
        areaDeAtuacao: req.body.areaDeAtuacao
    };

    listaDeInstrutores.push(novoInstrutor);

    proximoId += 1;
    
    res.send(novoInstrutor);

});



//Patch instrutores/3    Editar um elemento que ja ta na coleção.

 app.patch("/instrutores/:idConsultado", (req, res)=>{
    const instrutor = listaDeInstrutores.find(instrutor => instrutor.id === Number(req.params.idConsultado));
    
    if(req.body.nome !== undefined){
        instrutor.nome =  req.body.nome;
    }

    if(req.body.idade !== undefined){
        instrutor.idade = req.body.idade;
    }

    if(req.body.areaDeAtuacao !== undefined){
        instrutor.areaDeAtuacao = req.body.areaDeAtuacao;
    }

    res.json(instrutor);


 });


 //PUT  substituir um elemento da coleção/ se o id existe substitui, se não cria um novo id


  app.put("/instrutores/:idConsultado", (req, res) =>{
    const instrutor = listaDeInstrutores.find(
        (instrutor) => instrutor.id === Number(req.params.idConsultado)
    );
    if(instrutor){
        //substituir o existente
        instrutor.nome = req.body.nome;
        instrutor.idade = req.body.idade;
        instrutor.areaDeAtuacao = req.body.areaDeAtuacao;
        res.json(instrutor);
    }else{
        //inserir
        const novoInstrutor = req.body;
        listaDeInstrutores.push(novoInstrutor);
        res.json(novoInstrutor);
    }

  });

  // DELETE

   app.delete("/instrutores/:idConsultado", (req, res) =>{
    const instrutor = listaDeInstrutores.find(
        (instrutor) => instrutor.id === Number(req.params.idConsultado)
    );

    const  indice = listaDeInstrutores.indexOf(instrutor);

    listaDeInstrutores.splice(indice, 1);

    res.json(instrutor);

   });



app.listen(8000);
