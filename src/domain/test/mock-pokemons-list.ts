import { IPokemonsListModel } from '@src/domain/models/pokemons-list';

import { IPokemonListResponse } from '@src/domain/adapters/responses';

export const mockPokemonList = (): IPokemonsListModel => ({
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

export const mockPrimitivePokemonsList = (): IPokemonListResponse => ({
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
