import { IPokemonInformationsRequester } from '@src/domain/adapters';
import { IPokemonData } from '@src/domain/adapters/responses';
import { success } from '@src/domain/shared/utils/either';
import { IMapFamilyTree } from '@src/domain/usecases';
import { makePokemonData } from '../usecases/get-pokemon-informations/get-pokemon-informations.mock';
import { makeFamilyTreeThree } from '../usecases/map-family-tree/map-family-tree.mock';

export const mockMapFamilyTree = (): IMapFamilyTree => {
  class MapFamilyTreeStub implements IMapFamilyTree {
    async execute (params: IMapFamilyTree.Params): IMapFamilyTree.Result {
      return new Promise((resolve) => resolve(success(makeFamilyTreeThree())));
    }
  }

  return new MapFamilyTreeStub();
};

export const mockPokemonInformationsRequester = (): IPokemonInformationsRequester => {
  class PokemonInformationsRequesterStub implements IPokemonInformationsRequester {
    async informations (id: string): Promise<IPokemonData> {
      return new Promise((resolve) => resolve(makePokemonData()));
    }
  }

  return new PokemonInformationsRequesterStub();
};
