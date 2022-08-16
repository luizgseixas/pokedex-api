import { FamilyTreeRequester, PokemonInformationsRequester, PokemonsListRequester } from '@src/domain/adapters';
import { IEvolutionChain, IPokemonData, IPokemonListResponse } from '@src/domain/adapters/responses';
import { HttpClient } from '../http';

export class PokemonApiRequester extends HttpClient implements PokemonsListRequester, FamilyTreeRequester, PokemonInformationsRequester {
  constructor () {
    super({ baseURL: 'https://pokeapi.co/api/v2' });
  }

  async lists (offset?: string, limit?: string): Promise<IPokemonListResponse> {
    const { data } = await this.instance.get(`/pokemon?offset=${offset}&limit=${limit}`);
    return data;
  }

  async informations (pokemon: string): Promise<IPokemonData> {
    const { data } = await this.instance.get(`/pokemon/${pokemon}`);
    return data;
  }

  async familyTree (pokemonId: string): Promise<IEvolutionChain> {
    const { data } = await this.instance.get(`/evolution-chain/${pokemonId}`);
    console.log('batata');
    return data;
  }
}
