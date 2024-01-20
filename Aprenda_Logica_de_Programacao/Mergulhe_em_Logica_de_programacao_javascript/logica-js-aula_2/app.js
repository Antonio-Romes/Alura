/*
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(')
}*/

let contador = 1;

while(contador <= 10){
    console.log(contador);
    contador++;
}

contador = 10;
while(contador >= 0){
    console.log(contador);
    contador--;
}

contador = prompt('Informe um número para contagem regressiva'); 
while(contador >= 0){
    console.log(contador);
    contador--;
}

let numeroParaContagemProgressiva = prompt('Informe um número para contagem Progressiva'); 
contador = 0;
while(contador <= numeroParaContagemProgressiva){
    console.log(contador);
    contador++;
}