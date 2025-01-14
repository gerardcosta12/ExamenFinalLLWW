import mongoose from 'mongoose';

const PreguntaSchema = new mongoose.Schema({
  pregunta: { type: String, required: true },
  opcions: [
    {
      text: { type: String, required: true },
      correcta: { type: Boolean, required: true },
    },
  ],
  tematica: { type: String, required: true },
});

export default mongoose.model('Pregunta', PreguntaSchema);
