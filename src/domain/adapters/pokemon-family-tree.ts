import { IEvolutionChain } from './responses';

export interface IFamilyTreeRequester {
  familyTree: (id: string) => Promise<IEvolutionChain>;
}
