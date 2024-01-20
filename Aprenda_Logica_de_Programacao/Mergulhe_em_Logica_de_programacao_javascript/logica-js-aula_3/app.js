/*alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

*/

//exer-1
console.log('Boas-vindas');

//exer-2
let nome = 'Antonio Romes';
console.log(`Boas-vindas, ${nome}`);

//exer-3
alert(`Boas-vindas, ${nome}`);

//exer-4
let nomeDaLinguagemDeProgramacao = prompt('Qual a linguagem de programção que você gosta?');
console.log(`A linguagem preferida é ${nomeDaLinguagemDeProgramacao}`);

//exer-5
let valor1 = 15;
let valor2 = 20;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

//exer-6
 valor1 = 15;
 valor2 = 8;
 resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

//exer-7
let idade = prompt('informe sua idade ?');
if(idade >= 18){
    console.log('A pessoa e maior de idade')
}
else{
    console.log('A pessoa e menor de idade')
}

//exer-8
let numero = prompt('informe um numero!');
if(numero > 0){
    console.log('número positivo');
}
else if(numero < 0){
    console.log('número negativo');
}
else{
    console.log('número é zero');
}

//exer-9
let contator = 1;

while(contator >= 10){
    console.log(contator);
    contator++;
}

//exer-10
let nota = 8;
if(nota >= 7){
    console.log('Aprovado');
}
else{
    console.log('Reprovado');
}


//exer-11

console.log(parseInt(Math.random()* 100)+1);

//exer-12
console.log(parseInt(Math.random()* 10)+1);

//exer-13
console.log(parseInt(Math.random()* 1000)+1);