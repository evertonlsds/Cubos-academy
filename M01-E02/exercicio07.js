//Você deseja comprar um tênis novo, porém, está com o dinheiro do mês contado e te sobrará somente R$ 80,00 para comprá-lo.

//O tênis custa R$ 129,99 porém um amigo seu trabalha na loja e consegue te dar um cupom de desconto, a única coisa que ele precisa é saber quanto por cento de desconto você necessita.

//Crie um programa para calcular a porcentagem necessária de desconto para você conseguir comprar o tênis, utilizando a regra de três.



let valorTotalTenis = 129.99;
let dinheiroEmMaos = 80.00;

const porcentagem  = 100.00;
let porcentagemDinheiroEmMaos;
let cupomDeDesconto;

porcentagemDinheiroEmMaos = dinheiroEmMaos * porcentagem / valorTotalTenis;

cupomDeDesconto = porcentagem - porcentagemDinheiroEmMaos;
console.log(cupomDeDesconto);