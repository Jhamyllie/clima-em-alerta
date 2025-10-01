import CarbonoModel, { ICarbono } from "../models/carbono.js";

interface CalculoInput {
  eletricidadeKWh: number;
  distanciaCarroKm: number;
  porcoesCarneSemana: number;
}

export const criarCalculo = async (input: CalculoInput): Promise<ICarbono> => {
  const { eletricidadeKWh, distanciaCarroKm, porcoesCarneSemana } = input;

  // Fórmula de cálculo (ajuste conforme sua regra de negócio)
  const emissaoTotal =
    eletricidadeKWh * 0.1 + distanciaCarroKm * 0.2 + porcoesCarneSemana * 1.5;

  const sugestoes: string[] = [];
  if (eletricidadeKWh > 200) sugestoes.push("Reduza o consumo de energia elétrica");
  if (distanciaCarroKm > 100) sugestoes.push("Considere usar transporte público ou bicicleta");
  if (porcoesCarneSemana > 3) sugestoes.push("Reduza o consumo de carne vermelha");

  const novo = new CarbonoModel({
    eletricidadeKWh,
    distanciaCarroKm,
    porcoesCarneSemana,
    emissaoTotal,
    sugestoes
  });

  await novo.save();
  return novo;
};

export const listarCalculos = async () => {
  return await CarbonoModel.find();
};

export const buscarCalculoPorId = async (id: string) => {
  return await CarbonoModel.findById(id);
};

export const atualizarCalculo = async (id: string, dados: Partial<ICarbono>) => {
  return await CarbonoModel.findByIdAndUpdate(id, dados, { new: true });
};

export const deletarCalculo = async (id: string) => {
  return await CarbonoModel.findByIdAndDelete(id);
};
