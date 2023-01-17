import './config/module-alias';
import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';

import routes from './routes';
import { setupTypeorm } from '../infra/typeorm';

class Application {
  static async bootstrap (): Promise<void> {
    const app = express();
    const server = http.createServer(app);
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(cors());
    app.use(routes);

    await setupTypeorm();

    server.listen(4444, () => console.log(`🔥 Server running on host http://localhost:${4444} 🚀 `));
  }
}

Application.bootstrap();
