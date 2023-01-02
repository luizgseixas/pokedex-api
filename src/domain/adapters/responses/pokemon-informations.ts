export type PokemonData = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Type[];
  stats: Stat[];
  sprites: Sprite;
  moves: Move[];
}

export type Sprite = {
  front_default: string;
  front_shiny: string;
  front_female?: string;
  front_shiny_female?: string;
  back_default: string;
  back_shiny: string;
  back_female?: string;
  back_shiny_female?: string;
}

export type Move = {
  move: {
    name: string;
    url: string;
  };
}

export type Type = {
  type: {
    name: string;
  };
}

export type Stat = {
  base_stat: number;
  stat: { name: string };
}
