import { Router } from "express";
import { PokedexController } from "../app/controllers/pokedex_controller";

const router = Router();
const pokeController = new PokedexController();
router.get("/", pokeController.hello);
router.get("/list", pokeController.getPokemonList);
// router.get("/pokemon/:name", pokeController.fetchPokemonInfo);

export default router;
