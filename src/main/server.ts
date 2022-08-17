import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import routes from './routes';
import { connection } from '../infra/typeorm/connection';

// import swaggerDocs from '../swagger.json';

const app = express();

// bodyParser
app.use(express.json());
app.use(cors());
app.use(routes);

// rotas ficam depois do express.json pois ele faz a aplicação interpretar json
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
connection();

app.listen(process.env.NODE_PORT, () => console.log(`🔥 Server running on host http://localhost:${process.env.NODE_PORT} 🚀 `));
