//Adivinhe o Número: Implemente um jogo onde o
//computador escolhe um número aleatório entre 
//1 e 100, e o jogador tem que adivinhar. 
//O programa deve fornecer dicas sobre se o número é maior ou menor.

var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var tentativas = 0;

document.getElementById('adivinhar').addEventListener('click', function() {
    var tentativa = parseInt(document.getElementById('tentativa').value);

    if (isNaN(tentativa) || tentativa < 1 || tentativa > 100) {
        alert("Por favor, insira um número entre 1 e 100.");
        return;
    }

    tentativas++;

    if (tentativa === numeroAleatorio) {
        document.getElementById('dica').innerText = `Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`;
    } else if (tentativa < numeroAleatorio) {
        document.getElementById('dica').innerText = "Tente um número maior.";
    } else {
        document.getElementById('dica').innerText = "Tente um número menor.";
    }
});
