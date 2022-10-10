import { IPokemonInformationsRequester } from '@src/domain/adapters';
import { IPokemonData } from '@src/domain/adapters/responses';
import { success } from '@src/domain/shared/utils/either';
import { mockFamilyTreeThree, mockPrimitivePokemonInformations } from '@src/domain/tests';
import { IMapFamilyTree } from '@src/domain/usecases';

export const mockMapFamilyTree = (): IMapFamilyTree => {
  class MapFamilyTreeStub implements IMapFamilyTree {
    async execute (params: IMapFamilyTree.Params): IMapFamilyTree.Result {
      return new Promise((resolve) => resolve(success(mockFamilyTreeThree())));
    }
  }

  return new MapFamilyTreeStub();
};

export const mockPokemonInformationsRequester = (): IPokemonInformationsRequester => {
  class PokemonInformationsRequesterStub implements IPokemonInformationsRequester {
    async informations (id: string): Promise<IPokemonData> {
      return new Promise((resolve) => resolve(mockPrimitivePokemonInformations()));
    }
  }

  return new PokemonInformationsRequesterStub();
};
