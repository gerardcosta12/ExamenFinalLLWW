import express from 'express';
import { crearEvent } from '../controllers/eventController.js';
import { obtenirUltimsEvents } from '../controllers/eventController.js';
import { obtenirEstadistiques } from '../controllers/eventController.js';

const router = express.Router();

router.post('/event', crearEvent);
router.get('/ultims-events', obtenirUltimsEvents);
router.get('/estadistiques', obtenirEstadistiques);

export default router;
