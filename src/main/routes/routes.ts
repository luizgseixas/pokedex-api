import { Router } from "express";
import { makeGetFamilyTree } from "src/main/factories/get-family-tree";
import { PokedexController } from "../../presentation/controllers";

const router = Router();
const pokeController = new PokedexController();
router.get("/", pokeController.hello);
router.get("/list", pokeController.getPokemonList);
// router.get("/pokemon/:name", pokeController.fetchPokemonInfo);
router.get('/tree/:id', makeGetFamilyTree().execute )

export default router;
