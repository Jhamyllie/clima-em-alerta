import { Request, Response } from "express";
import { criarCalculo, listarCalculos, buscarCalculoPorId, atualizarCalculo, deletarCalculo } from "../service/carbonoService.js";

// Criar cálculo
export const criarCalculoController = async (req: Request, res: Response) => {
  try {
    const novo = await criarCalculo(req.body);
    return res.status(201).json({ sucesso: true, calculo: novo });
  } catch (error) {
    console.error("Erro ao criar cálculo:", error);
    return res.status(500).json({ sucesso: false, mensagem: "Erro interno no servidor" });
  }
};

// Listar todos
export const listarCalculosController = async (req: Request, res: Response) => {
  try {
    const lista = await listarCalculos();
    return res.json({ sucesso: true, calculos: lista });
  } catch (error) {
    console.error("Erro ao listar cálculos:", error);
    return res.status(500).json({ sucesso: false, mensagem: "Erro interno no servidor" });
  }
};

// Buscar por ID
export const buscarCalculoPorIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const calculo = await buscarCalculoPorId(id);

    if (!calculo) {
      return res.status(404).json({ sucesso: false, mensagem: "Cálculo não encontrado" });
    }

    return res.json({ sucesso: true, calculo });
  } catch (error) {
    console.error("Erro ao buscar cálculo:", error);
    return res.status(500).json({ sucesso: false, mensagem: "Erro interno no servidor" });
  }
};

// Atualizar
export const atualizarCalculoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const atualizado = await atualizarCalculo(id, req.body);

    if (!atualizado) {
      return res.status(404).json({ sucesso: false, mensagem: "Cálculo não encontrado" });
    }

    return res.json({ sucesso: true, calculo: atualizado });
  } catch (error) {
    console.error("Erro ao atualizar cálculo:", error);
    return res.status(500).json({ sucesso: false, mensagem: "Erro interno no servidor" });
  }
};

// Deletar
export const deletarCalculoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletado = await deletarCalculo(id);

    if (!deletado) {
      return res.status(404).json({ sucesso: false, mensagem: "Cálculo não encontrado" });
    }

    return res.json({ sucesso: true, mensagem: "Cálculo deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar cálculo:", error);
    return res.status(500).json({ sucesso: false, mensagem: "Erro interno no servidor" });
  }
};
