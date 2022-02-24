export interface PokemonListResponse {
  count: number;
  next: null;
  previus: null;
  results: PokemonList[];
}

export interface PokemonList {
  name: string;
  url: string;
}

export interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  stats: Stat[];
  sprites: Sprite;
  moves: Move[];
}

interface Sprite {
  front_default: string;
  back_default: string;
  front_shiny: string;
  back_shiny: string;
}

interface Move {
  move: {
    name: string;
  };
}

interface PokemonType {
  type: {
    name: string;
  };
}

interface Stat {
  base_stat: number;
  stat: { name: string };
}

export interface Evolutions {
  id: string;
  chain: evolutionChain;
}

interface EvolutionChain {
  species: { name: string };
  evolves_to: evolutionChain[];
  evolves_details: Evolution_detail[];
}

interface Evolution_detail {
  gender: string;
  min_level: number;
  min_happiness: number;
  trade_species: boolean;
  known_move: string;
  held_item: string;
  item: string;
  location: string;
}
