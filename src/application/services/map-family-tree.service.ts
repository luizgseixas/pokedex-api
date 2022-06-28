import { AxiosResponse } from "axios";
import { IFamilyTree } from "src/domain/interfaces/interfaces";
import { IMapFamilyTreeService } from "src/domain/services/map-family-tree.service";
import { left, right } from "src/domain/shared/utils/either";
import { PokemonApi } from "../../adapters/poke-api/api";


export class MapFamilyTreeService implements IMapFamilyTreeService {
  private api: PokemonApi;
  constructor() {
    this.api = new PokemonApi();
  }

  async execute(pokemonId: string): IMapFamilyTreeService.Result {
    try {
      const { data } = await this.api.getPokemonLists()
      console.log(data)
      return right(data);
    } catch (err) {
      console.error(err);
      return left(err)
    }
  }
}