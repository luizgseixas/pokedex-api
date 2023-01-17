import { FamilyTreeModel } from './family-tree';

export type PokemonInformationsModel = {
  id: number;
  name: string;
  sprites: Sprite;
  stats: Array<Stat>;
  types: Array<Type>;
  moves: Array<Move>;
  familyTree: Array<FamilyTreeModel>;
}

type Sprite = {
  front_default: string;
  front_shiny: string;
  front_female?: string;
  front_shiny_female?: string;
  back_default: string;
  back_shiny: string;
  back_female?: string;
  back_shiny_female?: string;
}

type Stat = {
  base_stat: number;
  stat: { name: string };
}

type Type = {
  type: {
    name: string;
  };
}

type Move = {
  name: string;
}
