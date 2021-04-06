const consumo = {
    NomeCliente: "Everton",
    Idade: 39,
    Produtos: [           //Objetos dentro de array
        {
            nomeProduto: "Batata frita",
            precoUni: 1500,
            quantidade: 2
        },

        {
            nomeProduto: "queijo Coalho",
            precoUni: 1800,
            quantidade: 2
        },

        {
            nomeProduto: "cerveja",
            precoUni: 800,
            quantidade: 10
        }


    ]


};

console.log(consumo.NomeCliente);
console.log(consumo.Idade);
consumo.Idade = 40;
console.log(consumo.Idade);
console.log(consumo.Produtos[0].nomeProduto);
console.log(consumo.Produtos[consumo.Produtos.length -1]. precoUni);
