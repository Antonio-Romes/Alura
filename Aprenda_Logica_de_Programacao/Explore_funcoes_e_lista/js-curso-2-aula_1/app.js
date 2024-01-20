
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Você precisa adivinhar um número entre 1 e 10');

function verificarChute(){
    console.log('Foi clicado!');
}

function gerarNumeroAleatorio(){
    return parseInt((Math.random() * 10) + 1);
}