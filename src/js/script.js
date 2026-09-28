//  DECLARAÇÕES

let nome="Fiap";
const idade =30;
let altura=1.75;
let estudante= true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof altura);
console.log(typeof estudade);

// MÉTODOS DE EXIBIÇÃO

// alert("Bem-vindo ao Sistema");

// let nomeUsuario= prompt ("Qual o nome do Uduário");

// console.log(`Olá, ${nomeUsuario}`);

// let desejaContinuar= comfirm("Deseja Realmente Continuar?");
// console.log("Resposta", desejaContinuar)

// Operadores (Aritméticos, comparação e lógicos)

//Aritmético
let soma = 10 + 5;
console.log(soma)
let multiplicacao = 4 *2;
console.log(multiplicacao)
let subtracao = 10 - 5;
console.log(subtracao)
let resto = 10 % 3;
console.log(resto)
let divisao = 5 / 3;
console.log(divisao)

//Comparação

let a =10;
let b= "10";

// = (atribuir)
// == (compara o valor)
// === (compara o valor e  o tipo da variável)

console.log(a == b); // compara
console.log(a === b); // compara e valida
console.log(a > b); //maior
console.log( a >= b); // maior igual
console.log( a != b); // diferente
console.log( a < 10)
//OPERADOR AND && _ AS DUAS OPERAÇÔES TEM QUE VERDADEIRAS
console.log( b < a && a > b)
//OPERADOR OR || UMA DAS OPERAÇÔES TEM QUE SER VERDADEIRAS
console.log( a>20 || b >= a)

let temIdade =18;
let habilitacao=true;

let dirigir = (temIdade >= 18) && habilitacao;
console.log("O Usuário pode Dirigir ?", dirigir);

// Estrutura Condicional
if(false){
    console.log("É VERDADEIRO")
}

//if/else

if(false){
    console.log("Verdadeiro")
}else{
    console.log("Falso")
}
