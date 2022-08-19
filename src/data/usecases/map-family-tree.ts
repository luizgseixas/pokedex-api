import { IMapFamilyTree } from '@src/domain/usecases/map-family-tree';
import { failure, success } from '@src/domain/shared/utils/either';
import { chainFilter, evolutionsDetailsFilter } from '@src/shared/utils/evolutions-filter';
import { FamilyTreeRequester } from '@src/domain/adapters';

export class MapFamilyTree implements IMapFamilyTree {
  private readonly api: FamilyTreeRequester;

  constructor (api: FamilyTreeRequester) {
    this.api = api;
  }

  async execute ({ pokemonId }: IMapFamilyTree.Params): IMapFamilyTree.Result {
    try {
      const data = await this.api.familyTree(pokemonId);

      const p = {
        evolution_details: [
          {
            gender: null,
            held_item: null,
            item: null,
            known_move: null,
            known_move_type: null,
            location: {
              name: 'eterna-forest',
              url: 'https://pokeapi.co/api/v2/location/8/',
            },
            min_affection: null,
            min_beauty: null,
            min_happiness: null,
            min_level: null,
            needs_overworld_rain: false,
            party_species: null,
            party_type: null,
            relative_physical_stats: null,
            time_of_day: '',
            trade_species: null,
            trigger: {
              name: 'level-up',
              url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
            },
            turn_upside_down: false,
          },
          {
            gender: null,
            held_item: null,
            item: null,
            known_move: null,
            known_move_type: null,
            location: {
              name: 'pinwheel-forest',
              url: 'https://pokeapi.co/api/v2/location/375/',
            },
            min_affection: null,
            min_beauty: null,
            min_happiness: null,
            min_level: null,
            needs_overworld_rain: false,
            party_species: null,
            party_type: null,
            relative_physical_stats: null,
            time_of_day: '',
            trade_species: null,
            trigger: {
              name: 'level-up',
              url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
            },
            turn_upside_down: false,
          },
          {
            gender: null,
            held_item: null,
            item: null,
            known_move: null,
            known_move_type: null,
            location: {
              name: 'kalos-route-20',
              url: 'https://pokeapi.co/api/v2/location/650/',
            },
            min_affection: null,
            min_beauty: null,
            min_happiness: null,
            min_level: null,
            needs_overworld_rain: false,
            party_species: null,
            party_type: null,
            relative_physical_stats: null,
            time_of_day: '',
            trade_species: null,
            trigger: {
              name: 'level-up',
              url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
            },
            turn_upside_down: false,
          },
          {
            gender: null,
            held_item: null,
            item: null,
            known_move: null,
            known_move_type: null,
            location: null,
            min_affection: null,
            min_beauty: null,
            min_happiness: null,
            min_level: null,
            needs_overworld_rain: false,
            party_species: null,
            party_type: null,
            relative_physical_stats: null,
            time_of_day: '',
            trade_species: null,
            trigger: {
              name: 'level-up',
              url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
            },
            turn_upside_down: false,
          },
          {
            gender: null,
            held_item: null,
            item: {
              name: 'leaf-stone',
              url: 'https://pokeapi.co/api/v2/item/85/',
            },
            known_move: null,
            known_move_type: null,
            location: null,
            min_affection: null,
            min_beauty: null,
            min_happiness: null,
            min_level: null,
            needs_overworld_rain: false,
            party_species: null,
            party_type: null,
            relative_physical_stats: null,
            time_of_day: '',
            trade_species: null,
            trigger: {
              name: 'use-item',
              url: 'https://pokeapi.co/api/v2/evolution-trigger/3/',
            },
            turn_upside_down: false,
          },
        ],
        evolves_to: [],
        is_baby: false,
        species: {
          name: 'leafeon',
          url: 'https://pokeapi.co/api/v2/pokemon-species/470/',
        },
      };

      console.log('detalhes filtrados', evolutionsDetailsFilter(p.evolution_details));

      return success(chainFilter(p));
    } catch (err) {
      console.error(err);
      return failure(err);
    }
  }
}
