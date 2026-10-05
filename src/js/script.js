//Declarações

let nome = "Fiap";
const idade = 30;
let altura = 1.75;
let estudante = true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof altura);
console.log(typeof estudante);

// MÉTODOS DE EXIBIÇÃO

// alert("Bem-vindo ao Sistema");

// let nomeUsuario= prompt("Qual é o nome do Usuário")
// // `` ${} = concatenação
// console.log(`Olá, ${nomeUsuario}`)

// let desejaContinuar = confirm("Deseja Realmente Continuar?")
// console.log("Resposta",desejaContinuar)

//Operadores (Aritméticos, Comparação e Lógicos)

//Ariteméticos
let soma = 10 + 5;
console.log(soma)
let multiplicacao = 4 * 2;
console.log(multiplicacao)
let subtracao = 10 - 5;
console.log(subtracao)
let resto = 10 % 3;
console.log(resto)
let divisao = 5 / 3;
console.log(divisao)

//comparação

let a = 10;
let b = "10";

// = (atribuir)
// == (compara o valor)
// === (compara o valor e o tipo da variavel)

console.log(a == b); //compara
console.log(a === b); //compara e valida
console.log(a > b); //maior
console.log(a >= b) //maior igual
console.log(a != b); //diferente
console.log(a < 10);
//OPERADOR AND && - AS DUAS OPERAÇÕES TEM QUE VERDADEIRAS
console.log(b < a && a > b);
//OPERADOR OR || - UMA DAS OPERAÇÕES TEM QUE SER VERDADEIRA
console.log(a > 20 || b >= a);

let temIdade = 18;
let habilitacao = true;

let dirigir = (temIdade >= 18) && habilitacao;
console.log("O Usuário pode Dirigir ?", dirigir);


//ESTRUTURA CONDICIONAL

//if
if (false) {
    console.log("É VERDADEIRO")
}

//if/else

if (false) {
    console.log("Verdadeiro")
} else {
    console.log("Falso")
}

// if/ if else/ else encadeado

let nota = 7;
if (nota >= 8) {
    console.log("Aprovado com sucesso")
}
else if (nota >= 6) {
    console.log("Ficou de Exame")
}
else {
    console.log("Reprovado")
}

//SWITCH CASE

let diaSemana=3;
switch(diaSemana){
case 1:
    console.log("Segunda-Feira")
    break;
case 2:
    console.log("Terça-Feira")
    break
case 3:
    console.log("Quarta-Feira")
    break;
default:
    console.log("Outro DIa")
}

//Ternario

// let notaUsuario= (nota >6)? "Aprovado": "Reprovado";
// console.log(notaUsuario)

// let idade1 = 18
// let podePilotar = idade1 >=18 ? "Pode Pilotar": "Não pode Pilotar";

// //ternário encadeado ou aninhado
// let resultado =10

// let jogador = resultado <=10 ? "Jogo Bom":
//               resultado > 20 && resultado < 99 ? "Jogo Médio":
//               resultado >=100 ? "Jogo Alto":"Extraordinário";
// console.log(jogador)

// let texto = prompt("Qual o seu nome")

// let mensagem1 = nome ? `Olá, dev ${texto}`: "Voçê não digitou";

// console.log(mensagem1)

//ESTRUTURA DE REPETIÇÃO

//FOR (luping/para...)

    //Declaração    Operação     Incremento
for(let numero =0; numero <=10; numero ++){
    console.log(`Contagem de numeros ${numero}`)
}