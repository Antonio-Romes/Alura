/*
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto})`);
}
else{
    alert('Você errou :(');
}*/

let diaDaSemana = prompt('Informe qual dia da semana! '+
                            '\n 1 - Segunda-Feira'+
                            '\n 2 - Terça-Feira'+
                            '\n 3 - Quarta-Feira'+
                            '\n 4 - Quinta-Feira'+
                            '\n 5 - Sexta-Feira'+
                            '\n 6 - Sabado'+
                            '\n 7 - Doningo'
                            );
    
    if(diaDaSemana == 6 || diaDaSemana == 7){
        alert('Bom fim de semana!');
    }
    else{
        alert('Boa semana!');
    }

let numeroPositivo = prompt('Informe um número!')

if(numeroPositivo >= 0){
    alert(`O número ${numeroPositivo} é Positivo`);
}
else{
    alert(`O número ${numeroPositivo} é Negativo`);
}

let numeroDaPontuacao = prompt('Informe o número da pontuação!')

if(numeroDaPontuacao > 100){
    alert('Parabéns, você venceu!');
}
else{
    alert('Tente novamente para ganhar.');
}

alert(`O valor do saldo em conta é ${2000}`);

let nome = prompt('Informe seu nome !')
  alert(`Boas-vindas ${nome}`);
 