document.getElementById('verificar').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero) || numero <= 1) {
        document.getElementById('resultado').innerText = "Por favor, insira um número inteiro positivo maior que 1.";
        return;
    }

    let primo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        document.getElementById('resultado').innerText = numero + " é um número primo.";
    } else {
        document.getElementById('resultado').innerText = numero + " não é um número primo.";
    }
});
