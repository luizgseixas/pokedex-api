import { FamilyTreeModel } from './family-tree';

export type PokemonInformationsModel = {
  id: number;
  name: string;
  sprites: Sprite;
  stats: Stats;
  types: Array<Type>;
  moves: Array<string>;
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

export type Stats = {
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

type Type = {
  type: string;
}
