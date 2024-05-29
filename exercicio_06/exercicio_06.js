//Média de Notas: Faça um programa que solicita ao
//usuário que insira as notas de alunos em uma
//disciplina e calcula a média dessas notas.
//O programa deve continuar pedindo notas até que
//o usuário decida parar.

let notas = [];

document.getElementById('adicionar').addEventListener('click', function() {
    var nota = parseFloat(document.getElementById('nota').value);

    if (nota >= 0 && nota <= 10) {
        notas.push(nota);
        document.getElementById('nota').value = '';
    } else {
        alert("digite uma nota válida entre 0 e 10.");
    }
});

document.getElementById('calcular').addEventListener('click', function() {
    if (notas.length === 0) {
        document.getElementById('resultado').innerText = "Nenhuma nota foi adicionada.";
        return;
    }

    let soma = notas.reduce((acc, cur) => acc + cur, 0);
    let media = soma / notas.length;

    document.getElementById('resultado').innerText = "Media das notas: " + media.toFixed(2);
});
