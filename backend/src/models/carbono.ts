import mongoose, { Schema, Document } from "mongoose";

export interface ICarbono extends Document {
  eletricidadeKWh: number;
  distanciaCarroKm: number;
  porcoesCarneSemana: number;
  emissaoTotal: number;
  sugestoes: string[];
  criadoEm: Date;
}

const CarbonoSchema: Schema = new Schema({
  eletricidadeKWh: { type: Number, required: true },
  distanciaCarroKm: { type: Number, required: true },
  porcoesCarneSemana: { type: Number, required: true },
  emissaoTotal: { type: Number, required: true },
  sugestoes: [{ type: String }],
  criadoEm: { type: Date, default: Date.now }
});

export const Carbono = mongoose.model<ICarbono>("Carbono", CarbonoSchema);
