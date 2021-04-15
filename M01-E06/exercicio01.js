//Faça um programa que altere uma string desse formarto que estamos
//acustumado no Brasil, com vírgula.
//por exemplo: numero 97.50 deve ser transformado para 97,50

const original = "97.50"

const resultado = original.replace( ".", "," );

console.log(resultado);