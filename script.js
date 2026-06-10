// Seleção dos elementos do DOM
const btnCalcular = document.querySelector('#btn-calcular');
const inputGasto = document.querySelector('#gasto-energia');
const inputArea = document.querySelector('#area-disponivel');
const zonaResultado = document.querySelector('#zona-resultado');
const resultadoTexto = document.querySelector('#resultado-texto');

// Escutador de eventos para processar o clique
btnCalcular.addEventListener('click', () => {
    // Captura e conversão dos valores digitados
    const gasto = parseFloat(inputGasto.value);
    const area = parseFloat(inputArea.value);

    // Validação estrita de dados para prevenção de bugs
    if (isNaN(gasto) || isNaN(area) || gasto <= 0 || area <= 0) {
        exibirErro('Por favor, insira valores válidos e maiores que zero em todos os campos.');
        return;
    }

    // Regras de negócio simuladas (Cálculos de Engenharia Agro)
    const economiaMensal estimada = gasto * 0.85; // Estimativa média de 85% de redução na conta
    const paineisNecessarios = Math.ceil(gasto / 150); // Estimativa de 1 painel a cada R$150 de conta
    const areaMinimaNecessaria = paineisNecessarios * 2.2; // Cada painel comercial ocupa ~2.2 m²

    // Verificação física de restrição de espaço
    if (area < areaMinimaNecessaria) {
        exibirErro(`Sua área atual (${area}m²) é insuficiente. Para cobrir seu gasto, você precisa de no mínimo ${areaMinimaNecessaria.toFixed(1)}m² para instalar os ${pioneisNecessarios} painéis necessários.`);
        return;
    }

    // Renderização elegante do resultado direto na interface
    zonaResultado.classList.remove('oculto');
    resultadoTexto.innerHTML = `
        <p class="sucesso-destaque">Análise Concluída com Sucesso! 🎉</p>
        <p>• <strong>Economia Estimada:</strong> R$ ${economiaMensalEstimada.toFixed(2)} por mês.</p>
        <p>• <strong>Estrutura Recomendada:</strong> Instalação de ${pioneisNecessarios} painéis solares.</p>
        <p>• <strong>Espaço Ocupado:</strong> Cerca de ${areaMinimaNecessaria.toFixed(1)}m² dos seus ${area}m² disponíveis serão utilizados.</p>
        <p style="margin-top: 1rem; font-size: 0.9rem; color: #666;">*Este cálculo é uma simulação educacional baseada em médias de radiação solar para o estado do Paraná.</p>
    `;
});

// Função auxiliar para tratamento e exibição visual de erros
function exibirErro(mensagem) {
    zonaResultado.classList.remove('oculto');
    resultadoTexto.innerHTML = `<p class="erro">⚠️ Erro: ${mensagem}</p>`;
}
