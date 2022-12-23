import { IPokemonInformationsModel } from '@src/domain/models/pokemon-informations';
import { mockFamilyTreeThree } from '@src/domain/test';
import { IPokemonData } from '../adapters/responses';

export const mockPokemonInformations = (): IPokemonInformationsModel => ({
  id: 1,
  name: 'any_name',
  stats: [{
    base_stat: 40,
    stat: { name: 'any_stat' },
  }],
  types: [{ type: { name: 'any_type' } }],
  sprites: {
    front_default: 'any_front_default',
    front_shiny: 'any_front_shiny',
    front_female: 'any_front_female',
    front_shiny_female: 'any_front_shiny_female',
    back_default: 'any_back_default',
    back_shiny: 'any_back_shiny',
    back_female: 'any_back_female',
    back_shiny_female: 'any_back_shiny_female',
  },
  moves: [{
    name: 'any_name',
    url: 'any_url',
  }],
  familyTree: mockFamilyTreeThree(),
});

export const mockPrimitivePokemonInformations = (): IPokemonData => ({
  id: 1,
  name: 'any_name',
  height: 1,
  weight: 35,
  types: [{ type: { name: 'any_type' } }],
  stats: [
    {
      base_stat: 40,
      stat: { name: 'any_stat' },
    },
  ],
  sprites: {
    front_default: 'any_front_default',
    front_shiny: 'any_front_shiny',
    front_female: 'any_front_female',
    front_shiny_female: 'any_front_shiny_female',
    back_default: 'any_back_default',
    back_shiny: 'any_back_shiny',
    back_female: 'any_back_female',
    back_shiny_female: 'any_back_shiny_female',
  },
  moves: [
    {
      move: {
        name: 'any_name',
        url: 'any_url',
      },
    },
  ],
});