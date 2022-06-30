export interface IFamilyTree {
  id: string;
  baby_trigger_item: any;
  chain: IEvolutionChain;
}

interface IEvolutionChain {
  species: { name: string; url: string };
  evolves_to: IEvolutionChain[];
  is_baby: boolean;
  evolution_details: IEvolution_detail[];
}

interface IEvolution_detail {
  gender: string;
  min_level: number;
  min_happiness: number;
  trade_species: boolean;
  known_move: string;
  known_move_type: string;
  held_item: string;
  item: string;
  location: string;
  min_affection: any;
  min_beauty: any;
  needs_overworld_rain: boolean;
  party_species: any;
  party_type: any;
  relative_physical_stats: any;
  time_of_day: string;
  trigger: {
    name: string;
    url: string;
  };
  turn_upside_down: boolean;
}
