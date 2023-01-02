import { EvolutionChain } from './responses';

export interface IFamilyTreeRequester {
  familyTree: (id: string) => Promise<EvolutionChain>;
}
