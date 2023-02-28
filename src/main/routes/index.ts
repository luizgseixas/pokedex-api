import { Router } from 'express';
import { adaptRouteExpress } from '../adapters/express-routes-adapter';
import { makeHealthController } from '../factories/health';

export default (router: Router): void => {
  router.get('/health', adaptRouteExpress(makeHealthController()));
};
