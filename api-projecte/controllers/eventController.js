import Event from '../models/Event.js';

export const crearEvent = async (req, res) => {
  try {
    const { sessionId, userId, llocEvent, tipusEvent } = req.body;
    const nouEvent = new Event({ sessionId, userId, llocEvent, tipusEvent });
    await nouEvent.save();
    res.status(201).json(nouEvent);
  } catch (error) {
    res.status(500).json({ error: "Error al crear l\'esdeveniment" });
  }
};

export const obtenirEstadistiques = async (req, res) => {
  try {
    const { dataInici, dataFinal, llocEvent, tipusEvent } = req.query;

    let filtre = {};
    if (dataInici) filtre.createdAt = { $gte: new Date(dataInici) };
    if (dataFinal) filtre.createdAt = { $lte: new Date(dataFinal) };
    if (llocEvent) filtre.llocEvent = llocEvent;
    if (tipusEvent) filtre.tipusEvent = tipusEvent;

    const estadistiques = await Event.aggregate([
      { $match: filtre },
      { $group: { _id: '$tipusEvent', count: { $sum: 1 } } },
    ]);

    res.json(estadistiques);
  } catch (error) {
    res.status(500).json({ error: 'Error a obtenir les estadístiques' });
  }
};
