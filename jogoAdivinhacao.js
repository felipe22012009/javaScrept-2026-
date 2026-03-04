const readline = require('readline-sync');

console.log("Jogo da adivinhação, chute um número de 1 a 10: ");

const numeroSecreto = Math.floor(Math.random()*10 + 1);

let palpite  = readline.questionInt("Qual é o seu palpite? ")
let tentativas = 1;

while(palpite != numeroSecreto){
    if (palpite < numeroSecreto){
        console.log("O número secreto é maior do que seu chute.");
    }
    else {
        console.log("O número secreto é menor que seu chute.");
    }

    palpite = readline.questionInt("Tente de novo. ");
    tentativas++;
}
console.log(`Parabens, você acertou o $(numeroSecreto) em $(tentativas) chutes`)