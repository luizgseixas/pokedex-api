import { IFamilyTreeModel } from './family-tree';

export interface IPokemonInformationsModel {
  id: number;
  name: string;
  sprites: ISprite;
  stats: Array<IStat>;
  types: Array<IType>;
  moves: Array<IMove>;
  familyTree: Array<IFamilyTreeModel>;
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

interface IStat {
  base_stat: number;
  stat: { name: string };
}

interface IType {
  type: {
    name: string;
  };
}

interface IMove {
  name: string;
  url: string;
}
