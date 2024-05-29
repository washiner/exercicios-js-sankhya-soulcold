//Soma dos Números: Crie um programa que solicita ao
//usuário um número inteiro positivo N e, em seguida,
//calcula a soma dos números de 1 a N utilizando um loop.

document.getElementById('calcular').addEventListener('click', function() {
    var numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero) || numero <= 0) {
        document.getElementById('resultado').innerText = "Inserir um numero valido";
        return;
    }

    var total = 0;
    for (var i = 1; i <= numero; i++) {
        total += i;
    }

    document.getElementById('resultado').innerText = "A soma de 1 a " + numero + " é " + total + ".";
});
