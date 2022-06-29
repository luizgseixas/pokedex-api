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
