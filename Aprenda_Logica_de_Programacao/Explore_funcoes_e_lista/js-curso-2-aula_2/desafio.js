
//Exer-01

function calcularImc(peso,altura){
    let imc = peso / (altura * altura);
    if(imc > 40){
        return 'obesidade grau III ou mórbida.';
    }
    else if(imc > 35){
        return 'obesidade grau II ou severa';
    }
    else if(imc > 30){
        return 'obesidade grau I';
    }
    else if(imc > 25){
        return 'sobrepeso';
    }
    else if(imc > 18.6){
        return 'peso ideal';
    }
    else if(imc > 17){
        return 'magreza leve';
    }
    else if(imc > 16){
        return 'magreza moderada';
    }
    else {
        return 'magreza grave';
    } 
}

console.log(` ${calcularImc(69,1.66)}`);

//Exer-02

function calcularFatorial(numeroTotal){

    let contator = 0
    let fatorial = 0
    while(numeroTotal >= contator){
        if(contator == 0 || contator == 1){
            fatorial = 1;
        }
        else{
            fatorial *= contator;
        }
        contator++;
        console.log(fatorial);
    }
}
calcularFatorial(6);

//Exer-03

function converteValorRealParaDolar(){
    return (10 * 4.94).toFixed(2);
}
console.log(`Valor convertido para dolar é ${converteValorRealParaDolar()}`);

//Exer-04
function calcularArea(base,largura){
    return largura * base;
}

function calculaPerimetro(base,largura){
    return 2 * (largura + base);
}

console.log(`Valor da area é ${calcularArea(12,5)}`);
console.log(`Valor do perimetro é ${calculaPerimetro(11,7)}`);

//Exer-05
function calcularAreaDoCirculo(pi,raio){
    return pi * Math.pow(raio,2);
}

function calculaPerimetroDoCirculo(pi,raio){
    return 2 * pi * raio;
}

console.log(`Valor da area do circulo é ${calcularAreaDoCirculo(3.14,5)}`);
console.log(`Valor do perimetro do circulo é ${calculaPerimetroDoCirculo(3.14,2)}`);

//Exer-06 

function tabuada(numero){

    let contator = 0;
    while(contator <= 10) {
        console.log(`${numero} x ${contator} = ${numero * contator}`);
        contator++;
    }
}

tabuada(5);

let diaSemana = "Domingo";

if(diaSemana == "Sabado" || "Domingo"){
    console.log('Bom final de semana');
}