import './config/module-alias';
import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import routes from './routes';
import { setupTypeorm } from '../infra/typeorm';

class Application {
  static async bootstrap (): Promise<void> {
    const app = express();
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(cors());
    app.use(routes);

    await setupTypeorm();

    app.listen(process.env.NODE_PORT, () => console.log(`🔥 Server running on host http://localhost:${process.env.NODE_PORT} 🚀 `));
  }
}

Application.bootstrap();
