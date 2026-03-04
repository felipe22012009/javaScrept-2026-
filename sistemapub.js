const readline = require ('readline-sync');

console.log("Sintema de acosso ao Pub do John");

const nome = redline.question("Qual seu nome? ");
const idade = redline.question("Qual sua idade? ");

if (idade >= 18) {
    console.log ('Ola ${nome}, sua entrada fou Altorizada. ');
    const querBeber = readline.keyInYN("Deseja ver as bebidas? ");
    if (querBeber){
        console.log("Garçom a caminho! ");
    } else{
        console.log("Temos sucos também");
    }
} else if (idade >= 16){
    console.log('Ola ${nome}, você precisa estar acompanhado.. ');
}else{
    console.log('Sinto muuito ${nome}, apenas maiores que 16....')
}