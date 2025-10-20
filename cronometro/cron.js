
// Variáveis para armazenar o temporizador e o estado do cronômetro
let temporizador;
let emExecucao = false;
let [horas, minutos, segundos] = [0, 0, 0];

// Função que atualiza o display do cronômetro na tela
function atualizarDisplay() {
    document.getElementById('cronometro').textContent =
        `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

// Função que controla o início e parada do cronômetro
function iniciarParar() {
    if (emExecucao) {
        // Se o cronômetro está em execução, paramos o temporizador
        clearInterval(temporizador);
        document.getElementById('botaoIniciarParar').textContent = 'Iniciar';
    } else {
        // Caso contrário, iniciamos o temporizador para incrementar os segundos a cada segundo
        temporizador = setInterval(() => {
            segundos++;
            if (segundos === 60) {
                segundos = 0;
                minutos++;
                if (minutos === 60) {
                    minutos = 0;
                    horas++;
                }
            }
            atualizarDisplay(); // Atualiza o display com os novos valores
        }, 1000);
        document.getElementById('botaoIniciarParar').textContent = 'Parar';
    }
    emExecucao = !emExecucao; // Alterna o estado do cronômetro (executando/parado)
}

// Função que reseta o cronômetro para o valor inicial 00:00:00
function resetar() {
    clearInterval(temporizador); // Para o temporizador
    [horas, minutos, segundos] = [0, 0, 0]; // Reseta os valores
    atualizarDisplay(); // Atualiza o display com os valores zerados
    document.getElementById('botaoIniciarParar').textContent = 'Iniciar';
    emExecucao = false; // Define o estado como parado
}
