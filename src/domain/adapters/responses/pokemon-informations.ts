export interface IPokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: IType[];
  stats: IStat[];
  sprites: ISprite;
  moves: IMove[];
}

export interface ISprite {
  front_default: string;
  front_shiny: string;
  front_female?: string;
  front_shiny_female?: string;
  back_default: string;
  back_shiny: string;
  back_female?: string;
  back_shiny_female?: string;
}

export interface IMove {
  move: {
    name: string;
    url: string;
  };
}

export interface IType {
  type: {
    name: string;
  };
}

export interface IStat {
  base_stat: number;
  stat: { name: string };
}
