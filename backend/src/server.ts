import express from 'express';

import clientRoutes from './routes/clientRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(clientRoutes);

app.listen(PORT, () => {
  console.log(`Servidor backend iniciado na porta ${PORT}`);
});