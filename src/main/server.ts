import './config/module-alias';
import 'dotenv/config';
import 'reflect-metadata';
import express, { Express } from 'express';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';

import routes from './routes';
import setupRoutes from './config/routes';
import { setupTypeorm } from '../infra/typeorm';

class Application {
  public static app: Express;

  static async bootstrap (): Promise<void> {
    this.app = express();
    const server = http.createServer(this.app);
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(cors());
    setupRoutes(this.app);
    await setupTypeorm();

    server.listen(4444, () => console.log(`🔥 Server running on host http://localhost:${4444} 🚀 `));
  }
}

Application.bootstrap();
