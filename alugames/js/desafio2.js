// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro:
function calculaIMC(altura, peso){
    let imc = peso / (alturaMetros * alturaMetros);
}
//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calculaFatorial (numero){
    if(numero === 0 || numero === 1 ){
        return 1;
    }
    let fatorial = 1;
    for(let i = 2; i <= numero; i++){
        fatorial *= i;
    }
    return fatorial;
}
let numero = 5;
let resultado = calculaFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$ 4,80
function converte(valorDolar){
    let cotacaoDolar = 4.80;
    let valorReais = valorDolar + cotacaoDolar;
    return valorReais.toFixed(2);
}
let valorDolar = 50;
let valorReais = converte(valorDolar);
console.log(`${valorDolar} equivale á ${valorReais}`);


//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero){
    for(let i = 1; i <= 10; i++){
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }

    let numero = 5;
    tabuada(numero);
}
