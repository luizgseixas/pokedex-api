import { IFamilyTreeRequester, IPokemonInformationsRequester, IPokemonsListRequester } from '@src/domain/adapters';
import { EvolutionChain, PokemonData, PokemonListResponse } from '@src/domain/adapters/responses';
import { HttpClient } from '../http-adapter';

export class PokemonApiRequester extends HttpClient implements IPokemonsListRequester, IFamilyTreeRequester, IPokemonInformationsRequester {
  constructor () {
    super({ baseURL: 'https://pokeapi.co/api/v2', headers: { 'Accept-Encoding': '*' } });
  }

  async lists (offset?: string, limit?: string): Promise<PokemonListResponse> {
    const { data } = await this.get<PokemonListResponse>(`/pokemon?offset=${offset ?? 1}&limit=${limit ?? 20}`);
    return data;
  }

  async informations (id: string): Promise<PokemonData> {
    const { data } = await this.get<PokemonData>(`/pokemon/${id}`);
    return data;
  }

  async familyTree (id: string): Promise<EvolutionChain> {
    const { data } = await this.get<EvolutionChain>(`/evolution-chain/${id}`);
    return data;
  }
}
