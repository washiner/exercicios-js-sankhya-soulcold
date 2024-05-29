//Contador de Dígitos: Escreva um programa que
//pede ao usuário para inserir um número inteiro 
//e conta quantos dígitos há nesse número.


document.getElementById('contar').addEventListener('click', function() {
    let numero = document.getElementById('numero').value.trim();

    if (numero === '' || isNaN(numero)) {
        alert("Por favor, insira um número inteiro válido.");
        return;
    }

    let digitos = numero.length;

    document.getElementById('resultado').innerText = `O número digitado possui ${digitos} dígitos.`;
});
