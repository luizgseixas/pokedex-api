import { IFamilyTreeRequester, IPokemonInformationsRequester, IPokemonsListRequester } from '@src/domain/adapters';
import { EvolutionChain, PokemonData, PokemonListResponse } from '@src/domain/adapters/responses';
import { AxiosHttpClient } from '../http/axios-adapter';

export class PokemonApiRequester extends AxiosHttpClient implements IPokemonsListRequester, IFamilyTreeRequester, IPokemonInformationsRequester {
  constructor () {
    super({ baseURL: 'https://pokeapi.co/api/v2', headers: { 'Accept-Encoding': '*' } });
  }

  async lists (offset?: string, limit?: string): Promise<PokemonListResponse> {
    return this.get<PokemonListResponse>({ url: `/pokemon?offset=${offset ?? 1}&limit=${limit ?? 20}` });
  }

  async informations (id: string): Promise<PokemonData> {
    return this.get<PokemonData>({ url: `/pokemon/${id}` });
  }

  async familyTree (id: string): Promise<EvolutionChain> {
    return this.get<EvolutionChain>({ url: `/evolution-chain/${id}` });
  }
}
