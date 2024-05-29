//Fatorial: Implemente um programa que solicita um 
//número inteiro não negativo e calcula o fatorial
//desse número usando um loop. 

document.getElementById('calcular').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero) || numero < 0) {
        document.getElementById('resultado').innerText = "Por favor, insira um número inteiro não negativo.";
        return;
    }

    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    document.getElementById('resultado').innerText = "O fatorial de " + numero + " é " + fatorial + ".";
});
