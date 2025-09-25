import { Request, Response } from 'express';
import { calcularEmissoes, obterRecomendacoes } from '../service/carbonoService.js';

interface CalculoInput {
    eletricidadeKwh: number;
    distanciaCarroKm: number;
    porcoesCarneSemana: number;
}

export const calcularEmissoesController = (req: Request, res: Response) => {
    try {
        const dadosInput = req.body as CalculoInput;
        const { eletricidadeKwh, distanciaCarroKm, porcoesCarneSemana } = dadosInput;

        if (
            eletricidadeKwh === undefined || 
            distanciaCarroKm === undefined || 
            porcoesCarneSemana === undefined ||
            eletricidadeKwh < 0 ||
            distanciaCarroKm < 0 ||
            porcoesCarneSemana < 0
        ) {
            return res.status(400).json({
                sucesso: false,
                mensagem: "Dados de entrada inválidos. Certifique-se de que todos os campos (eletricidade, carro, carne) foram enviados e são números positivos."
            });
        }

        const emissaoTotalMensal = calcularEmissoes(dadosInput);

        const recomendacoes = obterRecomendacoes(emissaoTotalMensal);

        return res.status(200).json({
            sucesso: true,
            emissaoTotalKgCO2Mensal: emissaoTotalMensal,
            unidade: "kg CO2 eq/mês",
            mensagem: "Cálculo e recomendações gerados com sucesso.",
            recomendacoes: recomendacoes,
        });

    } catch (error) {
        console.error("Erro no controlador de emissões:", error);
        return res.status(500).json({
            sucesso: false,
            mensagem: "Erro interno no servidor ao processar o cálculo."
        });
    }
};