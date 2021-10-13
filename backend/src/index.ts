import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import  router  from './routes';

import './database/conexao';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3300, () => console.log('Server startado!'));