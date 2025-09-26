import { Request, Response } from "express";
import Voluntario  from "../models/voluntario.js";

// Criar voluntário
export const criarVoluntarioController = async (req: Request, res: Response) => {
  try {
    const { nome, email, telefone, cidade, disponibilidadeHoras, areasInteresse } = req.body;

    if (!nome || !email || !cidade || disponibilidadeHoras === undefined) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Campos obrigatórios: nome, email, cidade, disponibilidadeHoras",
      });
    }

    const novo = await Voluntario.create({
      nome,
      email,
      telefone,
      cidade,
      disponibilidadeHoras,
      areasInteresse,
    });

    return res.status(201).json({ sucesso: true, voluntario: novo });
  } catch (error) {
    console.error("Erro ao cadastrar voluntário:", error);
    return res.status(500).json({ sucesso: false, mensagem: "Erro interno no servidor" });
  }
};

// Listar todos
export const listarVoluntariosController = async (req: Request, res: Response) => {
  try {
    const lista = await Voluntario.find();
    return res.status(200).json({ sucesso: true, voluntarios: lista });
  } catch (error) {
    console.error("Erro ao listar voluntários:", error);
    return res.status(500).json({ sucesso: false, mensagem: "Erro interno no servidor" });
  }
};

// Buscar por ID
export const buscarVoluntarioPorIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const voluntario = await Voluntario.findById(id);

    if (!voluntario) {
      return res.status(404).json({ sucesso: false, mensagem: "Voluntário não encontrado" });
    }

    return res.status(200).json({ sucesso: true, voluntario });
  } catch (error) {
    console.error("Erro ao buscar voluntário:", error);
    return res.status(500).json({ sucesso: false, mensagem: "Erro interno no servidor" });
  }
};

// Atualizar
export const atualizarVoluntarioController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dados = req.body;

    const atualizado = await Voluntario.findByIdAndUpdate(id, dados, { new: true });

    if (!atualizado) {
      return res.status(404).json({ sucesso: false, mensagem: "Voluntário não encontrado" });
    }

    return res.status(200).json({ sucesso: true, voluntario: atualizado });
  } catch (error) {
    console.error("Erro ao atualizar voluntário:", error);
    return res.status(500).json({ sucesso: false, mensagem: "Erro interno no servidor" });
  }
};

// Deletar
export const deletarVoluntarioController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletado = await Voluntario.findByIdAndDelete(id);

    if (!deletado) {
      return res.status(404).json({ sucesso: false, mensagem: "Voluntário não encontrado" });
    }

    return res.status(200).json({ sucesso: true, mensagem: "Voluntário removido com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar voluntário:", error);
    return res.status(500).json({ sucesso: false, mensagem: "Erro interno no servidor" });
  }
};
