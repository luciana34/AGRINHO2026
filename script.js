// Seleção dos elementos do DOM
const rangeProducao = document.getElementById('range-producao');
const rangeSustentavel = document.getElementById('range-sustentavel');

const valProducao = document.getElementById('val-producao');
const valSustentavel = document.getElementById('val-sustentavel');

const statusBadge = document.getElementById('status-badge');
const statusDesc = document.getElementById('status-desc');

// Função que calcula e atualiza o estado do ecossistema
function atualizarSimulador() {
    const prod = parseInt(rangeProducao.value);
    const sust = parseInt(rangeSustentavel.value);

    // Atualiza os textos dos valores numéricos
    valProducao.textContent = prod;
    valSustentavel.textContent = sust;

    // Lógica do Equilíbrio
    const saldo = sust - prod;

    // Reseta as classes anteriores do badge
    statusBadge.className = 'badge';

    if (saldo >= 10) {
        // Muito investimento para pouca ou média produção (Cenário Verde/Conservacionista)
        statusBadge.textContent = 'Preservação Alta';
        statusBadge.classList.add('ideal');
        statusDesc.textContent = 'Excelente! O investimento em práticas verdes supera os impactos da produção. O planeta agradece.';
    } else if (saldo >= -15 && saldo < 10) {
        // Valores próximos (Equilíbrio Sustentável)
        statusBadge.textContent = 'Equilibrado';
        statusBadge.classList.add('ideal');
        statusDesc.textContent = 'A produção está perfeitamente alinhada com a capacidade de regeneração e mitigação ambiental. Cenário ideal!';
    } else if (saldo >= -40 && saldo < -15) {
        // Produção ultrapassando o investimento (Alerta)
        statusBadge.textContent = 'Alerta Ecológico';
        statusBadge.classList.add('alerta');
        statusDesc.textContent = 'Atenção. O ritmo de produção está gerando mais resíduos e carbono do que as medidas sustentáveis conseguem compensar.';
    } else {
        // Exploração agressiva (Crítico)
        statusBadge.textContent = 'Colapso Iminente';
        statusBadge.classList.add('critico');
        statusDesc.textContent = 'Crítico! Exploração desenfreada de recursos sem mitigação ambiental. Risco severo de esgotamento de recursos locais.';
    }
}

// Event listeners para capturar a movimentação dos sliders em tempo real
rangeProducao.addEventListener('input', atualizarSimulador);
rangeSustentavel.addEventListener('input', atualizarSimulador);

// Inicializa o simulador com os valores padrão (50/50) ao carregar a página
atualizarSimulador();