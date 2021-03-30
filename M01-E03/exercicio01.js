const paises = ["Brasil", "Portugal", "Peru", "Argentina", "EUA"];


paises.push("Jamaica");
console.log(paises);

paises.pop();
console.log(paises);

paises.unshift("Belgica");
console.log(paises);

paises.shift();
console.log(paises);

const ultimoPais = paises[paises.length -1];
console.log(ultimoPais);

console.log(paises[1]);
console.log(paises[2]);