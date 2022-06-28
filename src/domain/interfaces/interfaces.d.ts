export interface IListOfPokemons {
  id: string;
  name: string;
  img: string;
}

export interface IPokemonListResponse {
  count: number;
  next: string;
  previus: string;
  results: IPokemonList[];
}

export interface IPokemonList {
  name: string;
  url: string;
}

export interface IPokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: IPokemonType[];
  stats: IStat[];
  sprites: ISprite;
  moves: IMove[];
}

interface ISprite {
  front_default: string;
  front_shiny: string;
  front_female?: string;
  front_shiny_female?: string;
  back_default: string;
  back_shiny: string;
  back_female?: string;
  back_shiny_female?: string;
}

interface IMove {
  move: {
    name: string;
  };
}

interface IPokemonType {
  type: {
    name: string;
  };
}

interface IStat {
  base_stat: number;
  stat: { name: string };
}

export interface IFamilyTree {
  baby_trigger_item: any;
  id: string;
  chain: IEvolutionChain;
}

interface IEvolutionChain {
  species: { name: string };
  evolves_to: IEvolutionChain[];
  evolves_details: IEvolution_detail[];
}

interface IEvolution_detail {
  gender: string;
  min_level: number;
  min_happiness: number;
  trade_species: boolean;
  known_move: string;
  held_item: string;
  item: string;
  location: string;
}

export namespace PokemonChainResponse {
  type Response = {
    id: number
    chain: Chain
  }

  type Chain = {
    evolution_details: Evolution_detals[]
    is_baby: boolean
    species: {
      name: string,
      url: string
    }
    envolves_to: Chain[]
  }

  type Evolution_detals = {
    gender: null,
    held_item: null,
    item: null,
    known_move: null,
    known_move_type: null,
    location: null,
    min_affection: null,
    min_beauty: null,
    min_happiness: number,
    min_level: number,
    needs_overworld_rain: boolean,
    party_species: null,
    party_type: null,
    relative_physical_stats: null,
    time_of_day: string,
    trade_species: null,
    trigger: {
      name: string,
      url: string
    },
    turn_upside_down: boolean
  }
}
