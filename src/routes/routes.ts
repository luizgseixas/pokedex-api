import { Router } from "express";
import { PokedexController } from "../controllers/pokedexController";

const router = Router();
const pokeController = new PokedexController();
router.get("/list", pokeController.getPokemonList);

router.get("/pokemon/:name", pokeController.fetchPokemonInfo);

export default router;
