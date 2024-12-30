// Criar uma função que exibe "Olá, mundo!" no console.
function digaOla(){
    console.log('Ola mundo');
}
digaOla();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome){
    console.log(`Olá, ${nome} !`);
}
exibirNome('Gustavo');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(num){
    return num * 2;
}
let resultado = dobro(2);
console.log(resultado);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calculaMedia(num1,num2,num3){
    return (num1 + num2 + num3) /3;
}
let media = calculaMedia(2,4,6);
console.log(media);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function descobreNum(a,b){
    return a > b ? a : b;
}
let maiorNum = descobreNum(5,10);
console.log(descobreNum);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function quadrado (numero){
    return numero * numero;
}
let resultadoQuadrado = quadrado(2);
console.log(resultadoQuadrado);