
// Exer-01
function exibirMensagemNoConcole(){ 
    console.log('Ola');
} 
exibirMensagemNoConcole();

// Exer-02
function imprimirNomeNoConcole(nome){
    console.log(`Ola ${nome}`);
}
imprimirNomeNoConcole("Joao");

// Exer-03
function retornaDobroDoNumero(numero){ 
    return numero * 2;
} 
console.log(`O dobro do número é ${retornaDobroDoNumero(5)}`);

// Exer-04
function retornaMedia(numero1,numero2,numero3){ 
    return (numero1 + numero2 + numero3) /3;
} 
console.log(`O da média é ${retornaMedia(5,10,8).toFixed(2)}`);

// Exer-05
function retornaNumeroMaior(numero1,numero2){ 
    return numero1 >= numero2 ? numero1 : numero2;
} 
console.log(`O número maior é ${retornaNumeroMaior(15,10)}`);

// Exer-06
function retornaNumeroMultiplicado(numero1){ 
    return numero1 * numero1 ;
} 
console.log(`O número multiplicado por ele mesmo é ${retornaNumeroMultiplicado(5)}`);