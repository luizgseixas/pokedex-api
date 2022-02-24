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
  back_default: string;
  front_shiny: string;
  back_shiny: string;
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

export interface IEvolutions {
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
