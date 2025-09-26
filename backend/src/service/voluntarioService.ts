import { Voluntario } from "../models/voluntario.js";

let voluntarios: Voluntario[] = [];
let idCounter = 1;

export function cadastrarVoluntario(dados: Omit<Voluntario, "id">): Voluntario {
    const novoVoluntario: Voluntario = {
        id: idCounter++,
        ...dados,
    };
    voluntarios.push(novoVoluntario);
    return novoVoluntario;
}

export function listarVoluntarios(): Voluntario[] {
    return voluntarios;
}
