import { IPokemonInformationsRequester } from '@src/domain/adapters';
import { PokemonData } from '@src/domain/adapters/responses';
import { success } from '@src/domain/shared/utils/either';
import { mockFamilyTreeThree, mockPrimitivePokemonInformations } from '@src/domain/test';
import { IMapFamilyTree } from '@src/domain/usecases';

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
    async informations (id: string): Promise<PokemonData> {
      return Promise.resolve(mockPrimitivePokemonInformations());
    }
  }

  return new PokemonInformationsRequesterStub();
};
