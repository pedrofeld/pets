const express = require('express');
import * as dotenv from 'dotenv';
import cors from 'cors';
// import { } from './middleware.js';
// import { } from './dados.js';
// import { randomUUID } from 'crypto'; 
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});