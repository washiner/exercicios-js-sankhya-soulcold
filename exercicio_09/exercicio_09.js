//Números Pares e Ímpares: Crie um programa que solicita ao
//usuário para inserir um número e, em seguida, exibe a
//contagem de números pares e ímpares até esse número.

document.getElementById('contar').addEventListener('click', function () {
    var numero = document.getElementById('numero').value.trim();
    var num = parseInt(numero);

    if (!Number.isFinite(num)) {
        alert("Por favor, insira um número inteiro válido.");
        return;
    }

    let pares = 0;
    let impares = 0;

    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    document.getElementById('resultado').innerText = `Números Pares até ${num}: ${pares}\nNúmeros Ímpares até ${num}: ${impares}`;

});
