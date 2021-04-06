const dados = {
    nome: "Everton",
    idade: 39,
    altura: 1.79,
    temCNH: true,
    apelidos: ["Afro", "Negão"]
};
let textoCNH = ""
if(dados.temCNH){
    textoCNH = "possui"
}else{
    textoCNH = "não possui"
}

console.log(`${dados.nome} tem ${dados.idade} anos, ${dados.altura} de altura, ${textoCNH} CNH  e possui os seguintes apelidos `  );
for(let apelido of dados.apelidos){
    console.log(`- ${apelido}`);

}