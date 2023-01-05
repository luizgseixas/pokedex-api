export type EvolutionChain = {
  id: number;
  baby_trigger_item: any;
  chain: Chain;
}

export type Chain = {
  species: { name: string; url: string };
  evolves_to: Chain[];
  is_baby: boolean;
  evolution_details: EvolutionDetail[];
}

type Detail = {
  name: string;
  url: string;
}

export type EvolutionDetail = {
  gender: string | null;
  min_level: number | null;
  min_happiness: number | null;
  trade_species: boolean | null;
  known_move: string | null;
  known_move_type: Detail | null;
  held_item: string | null;
  item: Detail | null;
  location: Detail | null;
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
