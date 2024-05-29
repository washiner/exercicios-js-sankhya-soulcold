//Cálculo de Média Ponderada: Desenvolva um programa que
//pede ao usuário para inserir as notas e os pesos de 
//várias disciplinas e calcula a média ponderada.

document.getElementById('calcular').addEventListener('click', function() {
    const disciplinas = document.querySelectorAll('#disciplinas div');

    let somaNotaXPeso = 0;
    let somaPesos = 0;

    disciplinas.forEach((disciplina, index) => {
        const nota = parseFloat(disciplina.querySelector(`#nota${index + 1}`).value);
        const peso = parseFloat(disciplina.querySelector(`#peso${index + 1}`).value);

        if (nota !== '' && peso !== '' && !isNaN(nota) && !isNaN(peso)) {
            somaNotaXPeso += nota * peso;
            somaPesos += peso;
        }
    });

    if (somaPesos === 0) {
        document.getElementById('resultado').innerText = "Por favor, insira notas e pesos válidos.";
        return;
    }

    const mediaPonderada = somaNotaXPeso / somaPesos;
    document.getElementById('resultado').innerText = `A média ponderada é: ${mediaPonderada.toFixed(2)}`;
});

