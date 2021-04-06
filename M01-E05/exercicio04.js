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

let totalApagar = 0;
for(let item of consumo.Produtos){
    totalApagar =totalApagar + (item.quantidade * item.precoUni);
    //outra forma de fazer a mesma coisa
    // totalApagar += item.quantidade * item.precoUni;

}
console.log(`${consumo.NomeCliente}, o valor total a pagar é de R$ ${totalApagar}`)

