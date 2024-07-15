function verificarPrimo() {
    // Seleciona o elemento de entrada e saída
    const numero = parseInt(document.getElementById('numero').value);
    const outputDiv = document.getElementById('output');
    
    // Verifica se o número é válido
    if (isNaN(numero) || numero < 2) {
        outputDiv.textContent = 'Por favor, digite um número inteiro maior que 1.';
        return;
    }
    
    let ehPrimo = true;
    let i = 2;
    
    while (i <= Math.sqrt(numero)) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
        i++;
    }
    
    // Exibe o resultado no elemento div
    if (ehPrimo) {
        outputDiv.textContent = 'O número ' + numero + ' é primo.';
    } else {
        outputDiv.textContent = 'O número ' + numero + ' não é primo.';
    }
}