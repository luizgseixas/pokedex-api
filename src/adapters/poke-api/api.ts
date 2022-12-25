import { IFamilyTreeRequester, IPokemonInformationsRequester, IPokemonsListRequester } from '@src/domain/adapters';
import { IEvolutionChain, IPokemonData, IPokemonListResponse } from '@src/domain/adapters/responses';
import { HttpClient } from '../http';

export class PokemonApiRequester extends HttpClient implements IPokemonsListRequester, IFamilyTreeRequester, IPokemonInformationsRequester {
  constructor () {
    super({ baseURL: 'https://pokeapi.co/api/v2', headers: { 'Accept-Encoding': '*' } });
  }

  async lists (offset?: string, limit?: string): Promise<IPokemonListResponse> {
    const { data } = await this.instance.get(`/pokemon?offset=${offset ?? 1}&limit=${limit ?? 20}`);
    return data;
  }

  async informations (id: string): Promise<IPokemonData> {
    const { data } = await this.instance.get(`/pokemon/${id}`);
    return data;
  }

  async familyTree (id: string): Promise<IEvolutionChain> {
    const { data } = await this.instance.get(`/evolution-chain/${id}`);
    return data;
  }
}
