import { Router } from "express";
import { 
  criarVoluntarioController, 
  listarVoluntariosController, 
  atualizarVoluntarioController, 
  buscarVoluntarioPorIdController,
  deletarVoluntarioController 
} from "../controller/voluntarioController.js";

const router = Router();

router.post("/cadastrar", criarVoluntarioController);
router.get("/listar", listarVoluntariosController);
router.get("/:id", buscarVoluntarioPorIdController);
router.put("/:id", atualizarVoluntarioController);
router.delete("/:id", deletarVoluntarioController);

export default router;
