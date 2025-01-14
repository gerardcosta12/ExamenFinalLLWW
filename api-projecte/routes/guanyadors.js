import express from 'express';
import Guanyador from '../models/Guanyador.js';

const router = express.Router();

router.post('/guanyador', async (req, res) => {
  try {
    const { nom, cognom, correu } = req.body;
    const nouGuanyador = new Guanyador({ nom, cognom, correu });
    await nouGuanyador.save();
    res.status(201).json(nouGuanyador);
  } catch (error) {
    res.status(500).json({ error: 'Error guardant el guanyador' });
  }
});

router.get('/guanyadors', async (req, res) => {
  try {
    const guanyadors = await Guanyador.aggregate([{ $sample: { size: 10 } }]);
    res.json(guanyadors);
  } catch (error) {
    res.status(500).json({ error: "Error a l'obtenir els guanyadors" });
  }
});

export default router;
