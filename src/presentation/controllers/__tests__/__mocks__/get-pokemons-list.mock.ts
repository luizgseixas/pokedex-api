import { PokemonsListModel } from '@src/domain/models/pokemons-list';

export const fakePokemonList: PokemonsListModel = {
  count: 1,
  next: 'next_url',
  previous: 'previous_url',
  results: [{
    name: 'any_name',
    url: 'any_url',
  }],
};
