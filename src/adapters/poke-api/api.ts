import { IFamilyTree, IPokemonData, IPokemonListResponse } from '@src/domain/adapters/responses';
import { AxiosResponse } from 'axios';
import { HttpClient } from '../http';

export class PokemonApi extends HttpClient {
  constructor() {
    super({ baseURL: 'https://pokeapi.co/api/v2' });
  }

  async getPokemonLists(
    offset?: string,
    limit?: string,
  ): Promise<AxiosResponse<IPokemonListResponse>> {
    return this.instance.get(`/pokemon?offset=${offset}&limit=${limit}`);
  }

  async getPokemonInformations(pokemon: string): Promise<AxiosResponse<IPokemonData>> {
    return this.instance.get(`/pokemon/${pokemon}`);
  }

  async getFamilyTree(pokemonId: string): Promise<AxiosResponse<IFamilyTree>> {
    return this.instance.get(`/evolution-chain/${pokemonId}`);
  }
}
