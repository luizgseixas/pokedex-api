import { IEvolutionChain } from './responses';

export interface IFamilyTreeRequester {
  familyTree: (pokemonId: string) => Promise<IEvolutionChain>;
}
