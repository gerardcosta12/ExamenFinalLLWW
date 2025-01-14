import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import preguntesRoutes from './routes/preguntes.js';
import guanyadorsRoutes from './routes/guanyadors.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

connectDB();

app.use('/api/preguntes', preguntesRoutes);
app.use('/api/guanyadors', guanyadorsRoutes);

app.get('/', (req, res) => {
  res.send('API funcionant correctament');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
