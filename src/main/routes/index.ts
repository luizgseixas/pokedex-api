import { Router } from 'express';
import { adaptRouteExpress } from '../adapters/express-routes-adapter';
import { makeGetFamilyTreeController } from '../factories/get-family-tree';
import { makeGetPokemonInformationsController } from '../factories/get-pokemon-information';
import { makeGetPokemonListController } from '../factories/get-pokemon-list';

const router = Router();

router.get('/list', adaptRouteExpress(makeGetPokemonListController()));
router.get('/pokemon/:id', adaptRouteExpress(makeGetPokemonInformationsController()));
router.get('/pokemon/:id/tree', adaptRouteExpress(makeGetFamilyTreeController()));

export default router;
