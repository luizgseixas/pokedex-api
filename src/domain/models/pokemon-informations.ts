import { ISprite, IStat, IType } from "../adapters/responses";
import { FamilyTreeModel } from "./family-tree";

export interface PokemonInformationsModel {
  id: number;
  name: string;
  sprites: ISprite;
  stats: IStat[];
  types: IType[];
  moves: Array<{
    name: string;
    url: string;
  }>;
  familyTree: FamilyTreeModel;
}