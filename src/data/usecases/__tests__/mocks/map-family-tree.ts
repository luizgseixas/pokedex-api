import { IEvolutionChain } from '@src/domain/adapters/responses';
import { FamilyTreeModel } from '@src/domain/models/family-tree';

export const makeEvolutionChain = (): IEvolutionChain => ({
  baby_trigger_item: null,
  chain: {
    evolution_details: [],
    evolves_to: [
      {
        evolution_details: [
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
            min_level: 16,
            needs_overworld_rain: false,
            party_species: null,
            party_type: null,
            relative_physical_stats: null,
            time_of_day: '',
            trade_species: null,
            trigger: {
              name: 'level-up',
              url: 'any_url',
            },
            turn_upside_down: false,
          },
        ],
        evolves_to: [
          {
            evolution_details: [
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
                min_level: 32,
                needs_overworld_rain: false,
                party_species: null,
                party_type: null,
                relative_physical_stats: null,
                time_of_day: '',
                trade_species: null,
                trigger: {
                  name: 'level-up',
                  url: 'any_url',
                },
                turn_upside_down: false,
              },
            ],
            evolves_to: [],
            is_baby: false,
            species: {
              name: 'any_name',
              url: 'any_url',
            },
          },
        ],
        is_baby: false,
        species: {
          name: 'any_name',
          url: 'any_url',
        },
      },
    ],
    is_baby: false,
    species: {
      name: 'any_name',
      url: 'any_url',
    },
  },
  id: 1,
});

export const makeFirstEvolutionChain = (): IEvolutionChain => ({
  baby_trigger_item: null,
  chain: {
    evolution_details: [],
    evolves_to: [],
    is_baby: false,
    species: {
      name: 'any_name',
      url: 'any_url',
    },
  },
  id: 1,
});

export const makeFirstAndSecondEvolutionChain = (): IEvolutionChain => ({
  baby_trigger_item: null,
  chain: {
    evolution_details: [],
    evolves_to: [
      {
        evolution_details: [
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
            min_level: 16,
            needs_overworld_rain: false,
            party_species: null,
            party_type: null,
            relative_physical_stats: null,
            time_of_day: '',
            trade_species: null,
            trigger: {
              name: 'level-up',
              url: 'any_url',
            },
            turn_upside_down: false,
          },
        ],
        evolves_to: [],
        is_baby: false,
        species: {
          name: 'any_name',
          url: 'any_url',
        },
      },
    ],
    is_baby: false,
    species: {
      name: 'any_name',
      url: 'any_url',
    },
  },
  id: 1,
});

export const makeFamilyTree = (): FamilyTreeModel => ({
  first_evolution: {
    name: 'any_name',
  },
  second_evolution: {
    name: 'any_name',
    evolves_details: { min_level: 16 },
  },

  third_evolution: {
    name: 'any_name',
    evolves_details: { min_level: 32 },
  },
});
