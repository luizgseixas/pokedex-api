import { IGetPokemonsListService } from "../../domain/services";
import { PokemonApi } from "../../adapters/poke-api/api";
import { left, right } from "src/domain/shared/utils/either";

interface IPokemon {
  name: string
}

export class GetPokemonsListService implements IGetPokemonsListService {
  private api: PokemonApi;
  constructor() {
    this.api = new PokemonApi();
  }

  public async execute(): IGetPokemonsListService.Result {
    try {
      const { data } = await this.api.getPokemonLists();

      if (!data) return left(0);

      return right(data);
    } catch (error) {
      console.error(error);
      throw new Error()
    }
  }

}
