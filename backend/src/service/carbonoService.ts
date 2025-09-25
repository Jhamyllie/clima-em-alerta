const FATORES_EMISSAO = {
    ELETRICIDADE_KWH: 0.15,
    CARRO_KM: 0.23,
    CARNE_VERMELHA_POR_SEMANA: 15,
};

interface CalculoInput {
    eletricidadeKwh: number;
    distanciaCarroKm: number;
    porcoesCarneSemana: number;
}

export function calcularEmissoes(dados: CalculoInput): number {
    const diasNoMes = 30.44;

    const emissaoEletricidade = dados.eletricidadeKwh * FATORES_EMISSAO.ELETRICIDADE_KWH;

    const emissaoTransporte = dados.distanciaCarroKm * FATORES_EMISSAO.CARRO_KM;

    const emissaoAlimentacao = dados.porcoesCarneSemana * FATORES_EMISSAO.CARNE_VERMELHA_POR_SEMANA * (diasNoMes / 7);

    const totalMensal = emissaoEletricidade + emissaoTransporte + emissaoAlimentacao;

    return parseFloat(totalMensal.toFixed(2));
}

export function obterRecomendacoes(emissaoTotal: number): string[] {
    const sugestoes: string[] = [];

    if (emissaoTotal > 500) {
        sugestoes.push("Sua emissão é alta. Considere usar mais transporte público ou **caronas solidárias** (como recomendado no projeto).");
    }

    if (emissaoTotal > 300) {
        sugestoes.push("Tente reduzir o consumo de eletricidade e verifique se seus eletrodomésticos são eficientes.");
    }

    sugestoes.push("Para compensar: Considere plantar 5 árvores. (A compensação local é fundamental para Brejões/BA).");

    return sugestoes;
}
