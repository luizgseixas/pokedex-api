import { IFamilyTreeModel } from '@src/domain/models/family-tree';

import { IEvolutionChain } from '@src/domain/adapters/responses';

export const mockPrimitiveOneEvolutionChain = (): IEvolutionChain => ({
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

export const mockPrimitiveTwoEvolutionChain = (): IEvolutionChain => ({
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

export const mockPrimitiveThreeEvolutionChain = (): IEvolutionChain => ({
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

export const mockPrimitiveAllEvolutionChain = (): IEvolutionChain => ({
  baby_trigger_item: null,
  chain: {
    evolution_details: [],
    evolves_to: [
      {
        evolution_details: [
          {
            gender: null,
            held_item: null,
            item: {
              name: 'any_item',
              url: 'any_url',
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
              name: 'any_trigger',
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
      {
        evolution_details: [
          {
            gender: null,
            held_item: null,
            item: {
              name: 'any_item',
              url: 'any_url',
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
              name: 'any_trigger',
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
      {
        evolution_details: [
          {
            gender: null,
            held_item: null,
            item: {
              name: 'any_item',
              url: 'any_url',
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
              name: 'any_trigger',
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
            min_happiness: 160,
            min_level: null,
            needs_overworld_rain: false,
            party_species: null,
            party_type: null,
            relative_physical_stats: null,
            time_of_day: 'day',
            trade_species: null,
            trigger: {
              name: 'any_trigger',
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
            min_happiness: 160,
            min_level: null,
            needs_overworld_rain: false,
            party_species: null,
            party_type: null,
            relative_physical_stats: null,
            time_of_day: 'night',
            trade_species: null,
            trigger: {
              name: 'any_trigger',
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
      {
        evolution_details: [
          {
            gender: null,
            held_item: null,
            item: null,
            known_move: null,
            known_move_type: null,
            location: {
              name: 'any_location',
              url: 'any_url',
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
              name: 'any_trigger',
              url: 'any_url',
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
              name: 'any_location',
              url: 'any_url',
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
              name: 'any_trigger',
              url: 'any_url',
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
              name: 'any_location',
              url: 'any_url',
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
              name: 'any_trigger',
              url: 'any_url',
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
              name: 'any_trigger',
              url: 'any_url',
            },
            turn_upside_down: false,
          },
          {
            gender: null,
            held_item: null,
            item: {
              name: 'any_item',
              url: 'any_url',
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
              name: 'any_trigger',
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
      {
        evolution_details: [
          {
            gender: null,
            held_item: null,
            item: null,
            known_move: null,
            known_move_type: null,
            location: {
              name: 'any_location',
              url: 'any_url',
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
              name: 'any_trigger',
              url: 'any_url',
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
              name: 'any_location',
              url: 'any_url',
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
              name: 'any_trigger',
              url: 'any_url',
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
              name: 'any_location',
              url: 'any_url',
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
              name: 'any_trigger',
              url: 'any_url',
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
              name: 'any_trigger',
              url: 'any_url',
            },
            turn_upside_down: false,
          },
          {
            gender: null,
            held_item: null,
            item: {
              name: 'any_item',
              url: 'any_url',
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
              name: 'any_trigger',
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
      {
        evolution_details: [
          {
            gender: null,
            held_item: null,
            item: null,
            known_move: null,
            known_move_type: {
              name: 'any_move',
              url: 'any_url',
            },
            location: null,
            min_affection: 2,
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
              name: 'any_trigger',
              url: 'any_url',
            },
            turn_upside_down: false,
          },
          {
            gender: null,
            held_item: null,
            item: null,
            known_move: null,
            known_move_type: {
              name: 'any_move',
              url: 'any_url',
            },
            location: null,
            min_affection: null,
            min_beauty: null,
            min_happiness: 160,
            min_level: null,
            needs_overworld_rain: false,
            party_species: null,
            party_type: null,
            relative_physical_stats: null,
            time_of_day: '',
            trade_species: null,
            trigger: {
              name: 'any_trigger',
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
  id: 67,
});

export const mockFamilyTreeOne = (): IFamilyTreeModel[] => ([
  {
    evolution_lvl: 1,
    name: 'any_name',
    evolution_details: null,
  },
]);

export const mockFamilyTreeTwo = (): IFamilyTreeModel[] => ([
  {
    evolution_lvl: 1,
    name: 'any_name',
    evolution_details: null,
  },
  {
    evolution_lvl: 2,
    name: 'any_name',
    evolution_details: {
      min_level: 16,
      trigger: 'level-up',
    },
  },
]);

export const mockFamilyTreeThree = (): IFamilyTreeModel[] => ([
  {
    evolution_lvl: 1,
    name: 'any_name',
    evolution_details: null,
  },
  {
    evolution_lvl: 2,
    name: 'any_name',
    evolution_details: {
      min_level: 16,
      trigger: 'level-up',
    },
  },
  {
    evolution_lvl: 3,
    name: 'any_name',
    evolution_details: {
      min_level: 32,
      trigger: 'level-up',
    },
  },
]);

export const mockFamilyTreeAll = (): IFamilyTreeModel[] => ([
  {
    evolution_lvl: 1,
    name: 'any_name',
    evolution_details: null,
  },
  {
    evolution_lvl: 2,
    name: 'any_name',
    evolution_details: {
      item: {
        name: 'any_item',
        url: 'any_url',
      },
      trigger: 'any_trigger',
    },
  },
  {
    evolution_lvl: 3,
    name: 'any_name',
    evolution_details: {
      item: {
        name: 'any_item',
        url: 'any_url',
      },
      trigger: 'any_trigger',
    },
  },
  {
    evolution_lvl: 4,
    name: 'any_name',
    evolution_details: {
      item: {
        name: 'any_item',
        url: 'any_url',
      },
      trigger: 'any_trigger',
    },
  },
  {
    evolution_lvl: 5,
    name: 'any_name',
    evolution_details: {
      min_happiness: 160,
      time_of_day: 'day',
      trigger: 'any_trigger',
    },
  },
  {
    evolution_lvl: 6,
    name: 'any_name',
    evolution_details: {
      min_happiness: 160,
      time_of_day: 'night',
      trigger: 'any_trigger',
    },
  },
  {
    evolution_lvl: 7,
    name: 'any_name',
    evolution_details: {
      location: {
        name: 'any_location',
        url: 'any_url',
      },
      trigger: 'any_trigger',
    },
  },
  {
    evolution_lvl: 8,
    name: 'any_name',
    evolution_details: {
      location: {
        name: 'any_location',
        url: 'any_url',
      },
      trigger: 'any_trigger',
    },
  },
  {
    evolution_lvl: 9,
    name: 'any_name',
    evolution_details: {
      known_move_type: {
        name: 'any_move',
        url: 'any_url',
      },
      min_affection: 2,
      trigger: 'any_trigger',
    },
  },
]);