import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import { setupSwagger } from './openapi/swagger';
import { connectProducer } from './adapters/kafka.producer';
import config from './config';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

setupSwagger(app);

app.use('/api/auth', authRoutes);

app.use((err:any, req:any, res:any, next:any) => {
  console.error(err);
  res.status(400).json({ error: err.message || 'Internal error' });
});

export default app;
