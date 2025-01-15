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

export const obtenirUltimsEvents = async (req, res) => {
  try {
    const { dataInici, dataFinal, llocEvent, tipusEvent } = req.query;

    let filtre = {};
    if (dataInici) filtre.createdAt = { $gte: new Date(dataInici) };
    if (dataFinal) filtre.createdAt = { $lte: new Date(dataFinal) };
    if (llocEvent) filtre.llocEvent = llocEvent;
    if (tipusEvent) filtre.tipusEvent = tipusEvent;

    const ultimsEvents = await Event.find(filtre)
      .sort({ createdAt: -1 })
      .limit(20);

    res.json(ultimsEvents);
  } catch (error) {
    res.status(500).json({ error: 'Error a obtenir els últims esdeveniments' });
  }
};
