import { Carbono, ICarbono } from "../models/carbono.js";

// Criar cálculo
export async function criarCalculo(dados: Partial<ICarbono>) {
  const novo = new Carbono(dados);
  return await novo.save();
}

// Listar todos
export async function listarCalculos() {
  return await Carbono.find();
}

// Buscar por ID
export async function buscarCalculoPorId(id: string) {
  return await Carbono.findById(id);
}

// Atualizar
export async function atualizarCalculo(id: string, dados: Partial<ICarbono>) {
  return await Carbono.findByIdAndUpdate(id, dados, { new: true });
}

// Deletar
export async function deletarCalculo(id: string) {
  return await Carbono.findByIdAndDelete(id);
}
