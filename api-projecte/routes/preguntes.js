import express from 'express';
import {
  obtenirPreguntes,
  afegirPregunta,
  actualitzarPregunta,
  eliminarPregunta,
} from '../controllers/preguntesController.js';

const router = express.Router();

router.get('/', obtenirPreguntes);
router.post('/', afegirPregunta);
router.put('/:id', actualitzarPregunta);
router.delete('/:id', eliminarPregunta);

export default router;
