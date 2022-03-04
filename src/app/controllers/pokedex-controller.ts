import { Request, Response } from "express";
import { IGetPokemonsListService } from "../protocols/get-pokemons-list-service";
import { GetPokemonsList } from "../services";

export class PokedexController {
  async hello(req: Request, res: Response) {
    res.json({ message: "hello" });
  }

  async getPokemonList(req: Request, res: Response) {
    const service = new GetPokemonsList();
    try {
      const list = await service.execute();
      console.log(list)
      res.json(list);
    } catch (error) {
      console.log(error);
    }
  }
}
