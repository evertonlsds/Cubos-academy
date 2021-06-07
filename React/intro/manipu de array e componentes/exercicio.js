const professoresBackend = ['Guido', 'Guilherme', 'Juninho', 'Leo'];
const professoresFrontend= ['Daniel', 'Dina', 'Vitinho'];

//criar um terceiro array com os professores da cubos

const professoresCubos = [...professoresBackend, ...professoresFrontend];

console.log(professoresCubos);

//pegar somente o terceiro item de professores backend

const [, , terceiroItem] = professoresBackend

console.log(terceiroItem);

//pegar o primeiro professor do array de professores geral, armazenar em uma constante chamada 'primeiro' 
//e salvar os demais em um array chamado outrosProfessores

const [primeiro, ...outrosProfessores] = professoresBackend;
//const [ ...professoresCubos] = outrosProfessores;


console.log(primeiro)
console.log(outrosProfessores)

//a partir de um array ProfessoresFrontend precisamos colocar Daniel na ultima posição do array, deixando 
//dessa ordem: Dina, Vitinho, Daniel, para isso vamos utilizar a maneira que melhor se encaixar nesse
//exercicio: 'dedestruturação' , 'spred', 'rest', 'skip'

const [primeiroItem, ...outrosFrontends] = professoresFrontend;
const outraOrdemFrontend = [...outrosFrontends, primeiroItem] ;

console.log(outraOrdemFrontend)




