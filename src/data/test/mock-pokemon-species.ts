import { mockSpecies } from '@src/domain/test';
import { ISpeciesRequester, SpeciesResponse } from '../contracts/apis';

export const mockSpeciesRequester = (): ISpeciesRequester => {
  class SpeciesRequesterStub implements ISpeciesRequester {
    species (id: string): Promise<SpeciesResponse> {
      return Promise.resolve(mockSpecies());
    }
  }

  return new SpeciesRequesterStub();
};
