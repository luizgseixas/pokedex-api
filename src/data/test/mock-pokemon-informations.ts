import { IPokemonInformationsRequester } from '@src/data/contracts/apis';
import { PokemonDataResponse } from '@src/data/contracts/apis/responses';
import { success } from '@src/domain/shared/utils/either';
import { mockFamilyTreeThree, mockPrimitivePokemonInformations } from '@src/domain/test';
import { IMapFamilyTree } from '@src/domain/usecases/pokemon';

export const mockMapFamilyTree = (): IMapFamilyTree => {
  class MapFamilyTreeStub implements IMapFamilyTree {
    async execute (params: IMapFamilyTree.Params): IMapFamilyTree.Result {
      return Promise.resolve(success(mockFamilyTreeThree()));
    }
  }

  return new MapFamilyTreeStub();
};

export const mockPokemonInformationsRequester = (): IPokemonInformationsRequester => {
  class PokemonInformationsRequesterStub implements IPokemonInformationsRequester {
    async informations (id: string): Promise<PokemonDataResponse> {
      return Promise.resolve(mockPrimitivePokemonInformations());
    }
  }

  return new PokemonInformationsRequesterStub();
};
