import { Express, Router } from 'express';
import { readdirSync } from 'fs';

export default (app: Express) => {
  const router = Router();
  app.use(router);

  readdirSync(`${__dirname}/../routes`).map(async (file) => {
    if (!file.includes('.test.') && !file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router);
    }
    console.log('[Routes Setup]', file);
  });
};
