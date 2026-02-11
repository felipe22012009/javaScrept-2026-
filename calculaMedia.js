let nota1 = 8;
let nota2 = 7;
let nota3 = 5;
let nota4 = 3;

const nomeAluno = "Valdemar";

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7){
    console.log("O aluno está aprovado")
    
}  if (media >= 5 && media >= 7){
    console.log("O aluno está de se liga")
}
if (media < 5){
    console.log("O alunoi está reprovado")
}

console.log("O aluno: " + nomeAluno);
console.log("Tem a média: " + media);