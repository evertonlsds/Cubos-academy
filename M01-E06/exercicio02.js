//faça um programa que altere uma string desse formaro para o formato
//que estamos acustumados no Brasil, com ponto.
//por exemplo: o numnero 1,350,000 deve ser transformado em 1.350.000

const original = "1,350,000,000";

//const resultado = original.replace(",", ".").replace(",", ".");  CASO ACRESCENTE MAIS  UMA VIRGULA N 
//                                                                  VAI FUNCIONAR.

//console.log(resultado);

let resultado = original;

 let resultadoAnterior = "";

 while (resultado !== resultadoAnterior){
     resultadoAnterior = resultado;
     resultado = resultado.replace(",", ".");
 }

console.log(resultado);

