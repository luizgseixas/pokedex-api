import 'reflect-metadata';
import 'module-alias/register';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import routes from './routes';
import { connection } from '../infra/typeorm/connection';

const app = express();

app.use(morgan('dev'));
// bodyParser
app.use(express.json());
app.use(cors());
app.use(routes);

// rotas ficam depois do express.json pois ele faz a aplicação interpretar json
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
connection();

app.listen(process.env.NODE_PORT, () => console.log(`🔥 Server running on host http://localhost:${process.env.NODE_PORT} 🚀 `));
