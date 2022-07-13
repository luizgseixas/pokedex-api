import { IFamilyTree } from "./responses";

export interface FamilyTreeRequester {
  familyTree: (pokemonId: string) => Promise<IFamilyTree>;
}