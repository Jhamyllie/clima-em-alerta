import { Request, Response } from "express";
import { Carbono } from "../models/carbono.js";

// Buscar cálculo por ID
export const buscarCalculoPorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const calculo = await Carbono.findById(id);

    if (!calculo) {
      return res.status(404).json({ sucesso: false, mensagem: "Cálculo não encontrado" });
    }

    return res.json({ sucesso: true, calculo });
  } catch (error) {
    console.error("Erro ao buscar cálculo:", error);
    return res.status(500).json({ sucesso: false, mensagem: "Erro interno no servidor" });
  }
};

// Atualizar cálculo
export const atualizarCalculo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { eletricidadeKWh, distanciaCarroKm, porcoesCarneSemana, emissaoTotal, sugestoes } = req.body;

    const atualizado = await Carbono.findByIdAndUpdate(
      id,
      { eletricidadeKWh, distanciaCarroKm, porcoesCarneSemana, emissaoTotal, sugestoes },
      { new: true }
    );

    if (!atualizado) {
      return res.status(404).json({ sucesso: false, mensagem: "Cálculo não encontrado" });
    }

    return res.json({ sucesso: true, calculo: atualizado });
  } catch (error) {
    console.error("Erro ao atualizar cálculo:", error);
    return res.status(500).json({ sucesso: false, mensagem: "Erro interno no servidor" });
  }
};

// Deletar cálculo
export const deletarCalculo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletado = await Carbono.findByIdAndDelete(id);

    if (!deletado) {
      return res.status(404).json({ sucesso: false, mensagem: "Cálculo não encontrado" });
    }

    return res.json({ sucesso: true, mensagem: "Cálculo deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar cálculo:", error);
    return res.status(500).json({ sucesso: false, mensagem: "Erro interno no servidor" });
  }
};
