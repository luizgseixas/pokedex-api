import { AxiosInstance, AxiosResponse } from "axios";
import { Api } from "../client/api";
import { IGetPokemonsListService } from "../protocols/get-pokemons-list-service";
import axios from "axios";

interface IPokemon {
  name: string
}
export class GetPokemonsList implements IGetPokemonsListService {
  private api: Api;
  constructor() {
    this.api = new Api();
  }

  public async execute() {
    try {
      const { data } = await this.api.get<IPokemon>("https://pokeapi.co/api/v2/pokemon");

      if (!data) return 0;
      // console.log(data);
      
      return data;
    } catch (error) {
      console.error(error);
      throw new Error()
    }
  }

}
