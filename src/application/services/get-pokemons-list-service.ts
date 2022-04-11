import { AxiosInstance, AxiosResponse } from "axios";
import { Api } from "../client/api";
import { IGetPokemonsListService } from "../../domain/services";
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
      const { data } = await this.api.get<IPokemon>("/pokemon");

      if (!data) return 0;
      // console.log(data);

      return data;
    } catch (error) {
      console.error(error);
      throw new Error()
    }
  }

}
