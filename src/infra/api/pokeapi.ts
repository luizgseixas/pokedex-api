import {
  IFamilyTreeRequester, IPokemonInformationsRequester, IPokemonsListRequester, ISpeciesRequester,
} from '@src/data/contracts/apis';
import {
  EvolutionChainResponse, PokemonDataResponse, PokemonListResponse, SpeciesResponse,
} from '@src/data/contracts/apis/responses';
import { AxiosHttpClient } from '../http/axios-adapter';

export class PokeApiRequester extends AxiosHttpClient implements IPokemonsListRequester, IFamilyTreeRequester, IPokemonInformationsRequester, ISpeciesRequester {
  constructor () {
    super({ baseURL: 'https://pokeapi.co/api/v2', headers: { 'Accept-Encoding': '*' } });
  }

  async lists (offset?: string, limit?: string): Promise<PokemonListResponse> {
    return this.get<PokemonListResponse>({ url: `/pokemon?offset=${offset ?? 1}&limit=${limit ?? 20}` });
  }

  async informations (id: string): Promise<PokemonDataResponse> {
    return this.get<PokemonDataResponse>({ url: `/pokemon/${id}` });
  }

  async species (id: string): Promise<SpeciesResponse> {
    return this.get<SpeciesResponse>({ url: `/pokemon-species/${id}` });
  }

  async familyTree (id: string): Promise<EvolutionChainResponse> {
    return this.get<EvolutionChainResponse>({ url: `/evolution-chain/${id}` });
  }
}
