import { IPokemonApi } from '@src/domain/adapters/api';
import { IFamilyTree, IPokemonData, IPokemonListResponse } from '@src/domain/adapters/responses';
import { HttpClient } from '../http';

export class PokemonApi extends HttpClient implements IPokemonApi {
  constructor() {
    super({ baseURL: 'https://pokeapi.co/api/v2' });
  }

  async getPokemonLists(offset?: string, limit?: string): Promise<IPokemonListResponse> {
    const { data } = await this.instance.get(`/pokemon?offset=${offset}&limit=${limit}`);
    return data;
  }

  async getPokemonInformations(pokemon: string): Promise<IPokemonData> {
    const { data } = await this.instance.get(`/pokemon/${pokemon}`);
    return data;
  }

  async getFamilyTree(pokemonId: string): Promise<IFamilyTree> {
    const { data } = await this.instance.get(`/evolution-chain/${pokemonId}`);
    return data;
  }
}
