const textao = "Eu gosto. Eu vou pra praia. pode parar, tudo eu vou pra praia"

const frases = textao.split(".");

console.log(frases);

let novoArray = [];
for (let frase of frases){
    novoArray.push(frase.trim());
}
console.log(novoArray);
