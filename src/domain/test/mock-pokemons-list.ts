import { PokemonsListModel } from '@src/domain/models/pokemon/pokemons-list';

import { PokemonListResponse } from '@src/data/contracts/apis/responses';

export const mockPokemonList = (): PokemonsListModel => ({
  count: 2,
  next: 'http://localhost:4444?offset=40&limit=20',
  previous: 'http://localhost:4444?offset=0&limit=20',
  results: [{
    name: 'any_name',
    url: 'any_url',
  },
  {
    name: 'any_name',
    url: 'any_url',
  }],
});

export const mockPrimitivePokemonsList = (): PokemonListResponse => ({
  count: 2,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20',
  previous: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
  results: [
    {
      name: 'any_name',
      url: 'any_url',
    },
    {
      name: 'any_name',
      url: 'any_url',
    },
  ],
});
