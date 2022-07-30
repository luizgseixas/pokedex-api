import { Router } from 'express';
import { adaptRouteExpress } from '../adapters/express-routes-adapter';
import { makeGetFamilyTreeController } from '../factories/get-family-tree';
import { makeGetPokemonInformationsController } from '../factories/get-pokemon-information';
import { makeGetPokemonListController } from '../factories/get-pokemon-list';

const router = Router();

router.get('/list', adaptRouteExpress(makeGetPokemonListController()));
router.get('/pokemon/:pokemon', adaptRouteExpress(makeGetPokemonInformationsController()));
router.get('/tree/:pokemonId', adaptRouteExpress(makeGetFamilyTreeController()));

export default router;
