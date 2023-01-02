import { EvolutionChain } from '@src/domain/adapters/responses';
import { IFamilyTreeRequester } from '@src/domain/adapters';
import { mockPrimitiveThreeEvolutionChain } from '@src/domain/test';

export const mockFamilyTreeRequester = (): IFamilyTreeRequester => {
  class FamilyTreeRequesterStub implements IFamilyTreeRequester {
    async familyTree (id: string): Promise<EvolutionChain> {
      return Promise.resolve(mockPrimitiveThreeEvolutionChain());
    }
  }

  return new FamilyTreeRequesterStub();
};
