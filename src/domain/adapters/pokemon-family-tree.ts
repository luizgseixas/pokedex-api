import { IEvolutionChain } from './responses';

export interface FamilyTreeRequester {
  familyTree: (pokemonId: string) => Promise<IEvolutionChain>;
}
