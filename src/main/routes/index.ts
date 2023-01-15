import { Router } from 'express';
import { adaptRouteExpress } from '../adapters/express-routes-adapter';
import { makeHealthController } from '../factories/health';
import { makeGetPokemonListController } from '../factories/get-pokemon-list';
import { makeGetFamilyTreeController } from '../factories/get-family-tree';
import { makeGetPokemonInformationsController } from '../factories/get-pokemon-information';

const router = Router();

router.get('/health', adaptRouteExpress(makeHealthController()));
router.get('/pokemon/list', adaptRouteExpress(makeGetPokemonListController()));
router.get('/pokemon/:id/informations', adaptRouteExpress(makeGetPokemonInformationsController()));
router.get('/pokemon/:id/tree', adaptRouteExpress(makeGetFamilyTreeController()));

export default router;
