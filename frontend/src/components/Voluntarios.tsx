import { useEffect, useState } from "react";
import api from "../api/api";

interface Voluntario {
  _id: string;
  nome: string;
  email: string;
  cidade: string;
  disponibilidadeHoras: number;
  areasInteresse: string[];
}

export default function Voluntarios() {
  const [voluntarios, setVoluntarios] = useState<Voluntario[]>([]);
  const [novo, setNovo] = useState({
    nome: "",
    email: "",
    cidade: "",
    disponibilidadeHoras: 0,
    areasInteresse: "",
  });

  useEffect(() => {
    api.get("/voluntarios/listar").then(res => setVoluntarios(res.data.voluntarios));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post("/voluntarios/cadastrar", {
      ...novo,
      areasInteresse: novo.areasInteresse.split(","),
    });
    const res = await api.get("/voluntarios/listar");
    setVoluntarios(res.data.voluntarios);
  };

  return (
    <div>
      <h2>Voluntários</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nome" onChange={e => setNovo({ ...novo, nome: e.target.value })} />
        <input placeholder="Email" onChange={e => setNovo({ ...novo, email: e.target.value })} />
        <input placeholder="Cidade" onChange={e => setNovo({ ...novo, cidade: e.target.value })} />
        <input
          type="number"
          placeholder="Horas disponíveis"
          onChange={e => setNovo({ ...novo, disponibilidadeHoras: Number(e.target.value) })}
        />
        <input
          placeholder="Áreas de interesse (separadas por vírgula)"
          onChange={e => setNovo({ ...novo, areasInteresse: e.target.value })}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {voluntarios.map(v => (
          <li key={v._id}>
            {v.nome} - {v.cidade} ({v.disponibilidadeHoras}h)
          </li>
        ))}
      </ul>
    </div>
  );
}
