import { Router } from 'express';
import { calcularEmissoesController } from '../controller/carbonoController.js'; 

const router = Router();

router.post('/calcular', calcularEmissoesController); 

export default router;