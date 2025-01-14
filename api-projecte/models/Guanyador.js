import mongoose from 'mongoose';

const GuanyadorSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  cognom: { type: String, required: true },
  correu: { type: String, required: true },
});

export default mongoose.model('Guanyador', GuanyadorSchema);
