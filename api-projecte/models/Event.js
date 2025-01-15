import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  userId: { type: String, default: null },
  llocEvent: { type: String, required: true },
  tipusEvent: { type: String, enum: ['visita', 'click'], required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Event', EventSchema);