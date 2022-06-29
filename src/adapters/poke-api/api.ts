import { AxiosResponse } from 'axios';
import { HttpClient } from '../http';

export class PokemonApi extends HttpClient {
  constructor() {
    super({ baseURL: 'https://pokeapi.co/api/v2' });
  }

  async getPokemonLists(): Promise<any> {
    try {
      return this.instance.get('/pokemon');
    } catch (err) {
      console.error(err);
    }
  }

  async getPokemonInformations(pokemon: string): Promise<any> {
    try {
      console.log('pokemon', pokemon);
      return this.instance.get(`/pokemon/${pokemon}`);
    } catch (err) {
      console.error(err);
    }
  }

  async getFamilyTree(pokemonId: string): Promise<any> {
    try {
      return this.instance.get(`/pokemon-species/${pokemonId}`);
    } catch (err) {
      console.error(err);
    }
  }
}
