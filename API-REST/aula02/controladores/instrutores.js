const listaDeInstrutores = require ("../dados/instrutores");
const areaDeAtuacaoValida = [
    "Logica",
    "Front-end",
    "Back-End",
    "Full-Stack",
    "Flutter",
    "Soft Skill"
];


function consultarTodosInstrutores(req, res){
    res.json(listaDeInstrutores);
}

function consultarUmInstrutor(req, res){
    const instrutor = listaDeInstrutores.find((instrutor) => instrutor.id === Number(req.params.idConsultado));
        if(!instrutor){
            res.status(404);
            res.json({erro: "Instrutor " + req.params.idConsultado +  " não existe"});
            return;

        }

    res.json(instrutor);
}

  let proximoId = 5;

function criarInstrutor(req, res){

    if(!req.body.nome){
        res.status(400);
        res.json({erro: "o campo nome é obrigatório"});
        return;
    }

    if(!req.body.idade){
        res.status(400);
        res.json({erro: "o campo idade é obrigatório"});
        return;
    }

    if(!req.body.areaDeAtuacao){
        res.status(400);
        res.json({erro: "o campo areaDeAtuacao é obrigatório"});
        return; 
    }

    if(typeof req.body.nome !== 'string'){
        res.status(404);
        res.json({erro: "O campo nome deve ser preenchida com um texto"});
        return;

    }

    if(typeof req.body.idade !== 'number'){
        res.status(404);
        res.json({erro: "O campo idade deve ser preenchida com um numero"});
        return;
    
    }

    if(typeof req.body.areaDeAtuacao !== 'string'){
        res.status(404);
        res.json({erro: "O campo area de atuação deve ser preenchida com um texto"});
        return;

    }

    if(req.body.idade < 18){
        res.status(404);
        res.json({erro: "O instrutor deve ser maior de idade"});
        return;

    }

    if(!areaDeAtuacaoValida.includes(req.body.areaDeAtuacao)){
        res.status(404);
        res.json({erro: "Área de atuação é inválida"});
        return;

    }
    const novoInstrutor ={
        id: proximoId,
        nome: req.body.nome,
        idade: req.body.idade,
        areaDeAtuacao: req.body.areaDeAtuacao
    };

    listaDeInstrutores.push(novoInstrutor);

    proximoId += 1;
    
    res.json(novoInstrutor);

}

function editarInstrutor (req, res){

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

}

function substituirInstrutores (req, res){
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
}

function excluirInstrutor (req, res){
    const instrutor = listaDeInstrutores.find(
        (instrutor) => instrutor.id === Number(req.params.idConsultado)
    );

    const  indice = listaDeInstrutores.indexOf(instrutor);

    listaDeInstrutores.splice(indice, 1);

    res.json(instrutor);

}    




module.exports = {
    consultarUmInstrutor,
    consultarTodosInstrutores,
    criarInstrutor,
    editarInstrutor,
    substituirInstrutores,
    excluirInstrutor

};