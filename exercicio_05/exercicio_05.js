//Série Fibonacci: Crie um programa que gera os primeiros
//N termos da série Fibonacci, onde N é fornecido pelo usuário.

document.getElementById('gerar').addEventListener('click', function() {
    const n = parseInt(document.getElementById('numero').value);

    if (isNaN(n) || n <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira um numero inteiro positivo.";
        return;
    }

    var fibonacci = [0, 1];
    for (var i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    document.getElementById('resultado').innerText = "Serie Fibonacci: " + fibonacci.join(', ');
});
