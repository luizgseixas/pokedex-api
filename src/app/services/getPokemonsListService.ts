import { AxiosInstance, AxiosResponse } from "axios";
import { api } from "../client/api";
import { IGetPokemonsListService } from "../protocols/getPokemonsListService";
import axios from "axios";

export class GetPokemonsList implements IGetPokemonsListService {
  private instance: AxiosInstance;
  constructor() {
    this.instance = api;
  }

  public async execute() {
    try {
      const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");

      if (!data) return 0;

      console.log(data);

      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
