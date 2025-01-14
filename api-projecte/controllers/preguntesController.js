import Pregunta from '../models/Pregunta.js';

export const obtenirPreguntes = async (req, res) => {
    try {
      const { tematica } = req.query;
      const filtre = tematica ? { tematica: { $regex: new RegExp(`^${tematica}$`, 'i') } } : {};
      const preguntes = await Pregunta.find(filtre);
      res.json(preguntes);
    } catch (error) {
      res.status(500).json({ error: "Error a l'obtenir les preguntes" });
    }
  };
  
export const afegirPregunta = async (req, res) => {
  try {
    const novaPregunta = new Pregunta(req.body);
    const preguntaGuardada = await novaPregunta.save();
    res.status(201).json(preguntaGuardada);
  } catch (error) {
    res.status(400).json({ error: "Error a l'afegir la pregunta" });
  }
};

export const actualitzarPregunta = async (req, res) => {
  try {
    const preguntaActualitzada = await Pregunta.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(preguntaActualitzada);
  } catch (error) {
    res.status(400).json({ error: "Error a l'actualizar la pregunta" });
  }
};

export const eliminarPregunta = async (req, res) => {
  try {
    await Pregunta.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Pregunta eliminada correctament' });
  } catch (error) {
    res.status(400).json({ error: "Error a l'eliminar la pregunta" });
  }
};
