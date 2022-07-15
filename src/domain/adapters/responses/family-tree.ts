export interface IEvolutionChain {
  id: number;
  baby_trigger_item: any;
  chain: IChain;
}

interface IChain {
  species: { name: string; url: string };
  evolves_to: IChain[];
  is_baby: boolean;
  evolution_details: IEvolution_detail[];
}

interface IEvolution_detail {
  gender: string | null;
  min_level: number | null;
  min_happiness: number | null;
  trade_species: boolean | null;
  known_move: string | null;
  known_move_type: string | null;
  held_item: string | null;
  item: string | null;
  location: string | null;
  min_affection: any | null;
  min_beauty: any | null;
  needs_overworld_rain: boolean | null;
  party_species: any | null;
  party_type: any | null;
  relative_physical_stats: any | null;
  time_of_day: string | null;
  trigger: {
    name: string | null;
    url: string | null;
  };
  turn_upside_down: boolean | null;
}
