const express = require("express");
const instrutores = require("./controladores/instrutores")

const roteador = express();

roteador.get("/instrutores", instrutores.consultarTodosInstrutores);
roteador.get("/instrutores/:idConsultado", instrutores.consultarUmInstrutor);

//POST/instrutores |criar Novos recursos na coleção.|
roteador.post("/instrutores/", instrutores.criarInstrutor );

//Patch instrutores/3    Editar um elemento que ja ta na coleção.
roteador.patch("/instrutores/:idConsultado", instrutores.editarInstrutor);
   
//PUT  substituir um elemento da coleção/ se o id existe substitui, se não cria um novo id
roteador.put("/instrutores/:idConsultado", instrutores.substituirInstrutores);

// DELETE
roteador.delete("/instrutores/:idConsultado", instrutores.excluirInstrutor);

module.exports = roteador;

