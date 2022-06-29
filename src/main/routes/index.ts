import { Router } from 'express';
import { makeGetFamilyTree } from '@src/main/factories/get-family-tree';
import { adaptRoute } from '../adapters/express-routes-adapter';
import { makeGetPokemonListController } from '../factories/get-pokemon-list';

const router = Router();

router.get('/list', adaptRoute(makeGetPokemonListController()));
router.get('/pokemon/:name', adaptRoute());

// router.get('/tree/:id', makeGetFamilyTree().execute);

export default router;
