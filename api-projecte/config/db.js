import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/trivia');
    console.log('Connectat a MongoDB');
  } catch (error) {
    console.error('Error al connectar MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
