import { Router } from 'express';
// import { makeGetFamilyTree } from '@src/main/factories/get-family-tree';
import { adaptRoute } from '../adapters/express-routes-adapter';
import { makeGetPokemonInformationController } from '../factories/get-pokemon-information';
import { makeGetPokemonListController } from '../factories/get-pokemon-list';

const router = Router();

router.get('/list', adaptRoute(makeGetPokemonListController()));
router.get('/pokemon/:pokemon', adaptRoute(makeGetPokemonInformationController()));

// router.get('/tree/:id', makeGetFamilyTree().execute);

export default router;
