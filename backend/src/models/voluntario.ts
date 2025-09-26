import mongoose from "mongoose";

const VoluntarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  telefone: { type: String },
  cidade: { type: String, required: true },
  disponibilidadeHoras: { type: Number, required: true },
  areasInteresse: { type: [String] }
});

const Voluntario = mongoose.model("Voluntario", VoluntarioSchema);

export default Voluntario;
