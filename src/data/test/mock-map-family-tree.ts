import { EvolutionChain } from '@src/data/contracts/apis/responses';
import { IFamilyTreeRequester } from '@src/data/contracts/apis';
import { mockPrimitiveThreeEvolutionChain } from '@src/domain/test';

export const mockFamilyTreeRequester = (): IFamilyTreeRequester => {
  class FamilyTreeRequesterStub implements IFamilyTreeRequester {
    async familyTree (id: string): Promise<EvolutionChain> {
      return Promise.resolve(mockPrimitiveThreeEvolutionChain());
    }
  }

  return new FamilyTreeRequesterStub();
};
