import express from 'express';
import { crearEvent } from '../controllers/eventController.js';

const router = express.Router();

router.post('/event', crearEvent);

export default router;
