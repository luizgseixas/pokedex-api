import { Request, Response } from "express";
import { PokedexService } from "../services/pokedexService";

export class PokedexController {
  constructor() {}

  async getPokemonList(req: Request, res: Response) {
    const pokeService = new PokedexService();
    try {
      const list = await pokeService.buildPokemonList();
      res.json(list);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchPokemonInfo(req: Request, res: Response) {
    try {
      const { name } = req.params;
      const pokeService = new PokedexService();
      const pokemonData = await pokeService.fetchPokemon(name);
      res.json(pokemonData);
    } catch (error) {
      console.log(error);
    }
  }
}
