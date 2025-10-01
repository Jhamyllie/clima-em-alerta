import { Router } from "express";
import { 
  criarCalculoController,
  listarCalculosController,
  buscarCalculoPorIdController,
  atualizarCalculoController,
  deletarCalculoController
} from "../controller/carbonoController.js";

const router = Router();

router.post("/calcular", criarCalculoController);
router.get("/", listarCalculosController);
router.get("/:id", buscarCalculoPorIdController);
router.put("/:id", atualizarCalculoController);
router.delete("/:id", deletarCalculoController);

export default router;
