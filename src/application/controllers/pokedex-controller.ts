import { Request, Response } from "express";
import { IGetPokemonsListService } from "../../domain/services";
import { GetPokemonsListService } from "../services";

export class PokedexController {
  async hello(req: Request, res: Response) {
    res.json({ message: "hello" });
  }

  async getPokemonList(req: Request, res: Response) {
    const service = new GetPokemonsListService();
    try {
      const list = await service.execute();
      console.log(list)
      res.json(list);
    } catch (error) {
      console.log(error);
    }
  }
}
