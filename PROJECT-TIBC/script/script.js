function calcularTIBC() {
    // Obter os valores de entrada
    const ferro = parseFloat(document.getElementById('ferro').value);
    const uibc = parseFloat(document.getElementById('uibc').value);

    // Verificar se os valores são válidos
    if (isNaN(ferro) || isNaN(uibc)) {
        document.getElementById('resultado').innerText = "Por favor, insira valores numéricos válidos.";
        return;
    }

    // Calcular TIBC
    const tibc = ferro + uibc;

    // Exibir o resultado
    document.getElementById('resultado').innerText = `O TIBC calculado é: ${tibc.toFixed(2)} µg/dL`;
}