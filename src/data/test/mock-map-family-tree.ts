import { IEvolutionChain } from '@src/domain/adapters/responses';
import { IFamilyTreeRequester } from '@src/domain/adapters';
import { makeThreeEvolutionChain } from '../usecases/map-family-tree/map-family-tree.mock';

export const mockFamilyTreeRequester = (): IFamilyTreeRequester => {
  class FamilyTreeRequesterStub implements IFamilyTreeRequester {
    async familyTree (pokemonId: string): Promise<IEvolutionChain> {
      return new Promise((resolve) => resolve(makeThreeEvolutionChain()));
    }
  }

  return new FamilyTreeRequesterStub();
};
