import { AxiosResponse } from "axios";
import { HttpClient } from "../http";


export class PokemonApi extends HttpClient {
  constructor () {
    super({ baseURL: 'https://pokeapi.co/api/v2'});
  }

  async getPokemonLists(): Promise<AxiosResponse<any>> {
    try {
      return this.instance.get('/pokemon');
    } catch (err) {
      console.error(err)
      return null;
    }
  }

  async getFamilyTree(pokemonId: string): Promise<AxiosResponse<any>> {
    try {
      return this.instance.get(`/pokemon-species/${pokemonId}`)
    } catch (err) {
      console.error(err)
      return null
    }
  }
}
