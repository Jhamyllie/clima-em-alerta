import { useEffect, useState } from "react";
import api from "../api/api";

interface Calculo {
  _id: string;
  eletricidadeKWh: number;
  distanciaCarroKm: number;
  porcoesCarneSemana: number;
  emissaoTotal: number;
  sugestoes: string[];
}

export default function Carbono() {
  const [calculos, setCalculos] = useState<Calculo[]>([]);
  const [form, setForm] = useState({
    eletricidadeKWh: 0,
    distanciaCarroKm: 0,
    porcoesCarneSemana: 0,
  });

  useEffect(() => {
    api.get("/carbono").then(res => setCalculos(res.data.calculos));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post("/carbono", form);
    const res = await api.get("/carbono");
    setCalculos(res.data.calculos);
  };

  return (
    <div>
      <h2>Calculadora de Carbono</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="kWh por mês"
          onChange={e => setForm({ ...form, eletricidadeKWh: Number(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Km de carro por mês"
          onChange={e => setForm({ ...form, distanciaCarroKm: Number(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Porções de carne vermelha por semana"
          onChange={e => setForm({ ...form, porcoesCarneSemana: Number(e.target.value) })}
        />
        <button type="submit">Calcular</button>
      </form>

      <ul>
        {calculos.map(c => (
          <li key={c._id}>
            Emissão: {c.emissaoTotal} kgCO₂eq → Sugestões: {c.sugestoes.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
