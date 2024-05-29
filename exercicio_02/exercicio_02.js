//Tabuada: Escreva um programa que pede ao usuário para 
//inserir um número e imprime a tabuada desse número
//de 1 a 10 usando um loop.

document.getElementById('calcular').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero)) {
        document.getElementById('tabuada').innerText = "Insira um numero inteiro.";
        return;
    }

    var tabuada = "";
    for (var i = 1; i <= 10; i++) {
        tabuada += numero + " x " + i + " = " + (numero * i) + "\n";
    }

    document.getElementById('tabuada').innerText = tabuada;
});
