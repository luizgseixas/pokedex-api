import { Request, Response } from "express";
import { IGetPokemonsListService } from "../protocols/getPokemonsListService";
import { GetPokemonsList } from "../services";

export class PokedexController {
  getPokemonsListService: IGetPokemonsListService;
  constructor() {
    this.getPokemonsListService = new GetPokemonsList();
  }

  async hello(req: Request, res: Response) {
    res.json({ message: "hello" });
  }

  async getPokemonList(req: Request, res: Response) {
    try {
      const list = await this.getPokemonsListService.execute();
      res.json("ok");
    } catch (error) {
      console.log(error);
    }
  }

  // async fetchPokemonInfo(req: Request, res: Response) {
  //   try {
  //     const { name } = req.params;
  //     const pokeService = new PokedexService();
  //     const pokemonData = await pokeService.fetchPokemon(name);
  //     res.json(pokemonData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
