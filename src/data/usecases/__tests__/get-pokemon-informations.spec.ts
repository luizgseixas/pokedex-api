import { PokemonInformationsRequester } from '../../../domain/adapters';
import { IPokemonData } from '../../../domain/adapters/responses';
import { IGetPokemonInformation, IMapFamilyTree } from '../../../domain/usecases';
import { right } from '../../../domain/shared/utils/either';

import { makeFamilyTree, makePokemonData } from './mocks';

import { GetPokemonInformation } from '../get-pokemon-informations';

const makeMapFamilyTree = (): IMapFamilyTree => {
  class MapFamilyTreeStub implements IMapFamilyTree {
    async execute(params: IMapFamilyTree.Params): IMapFamilyTree.Result {
      // return new Promise((resolve) => resolve(right(makeFamilyTree())));
      return right(makeFamilyTree());
    }
  }

  return new MapFamilyTreeStub();
};

const makeApi = (): PokemonInformationsRequester => {
  class ApiStub implements PokemonInformationsRequester {
    informations (pokemon: string): Promise<IPokemonData> {
      return new Promise(resolve => resolve(makePokemonData()))
    }
  }

  return new ApiStub()
}

interface SutTypes {
  sut: IGetPokemonInformation;
  mapFamilyTreeStub: IMapFamilyTree;
  apiStub: PokemonInformationsRequester;
}

const makeSut = (): SutTypes => {
  const mapFamilyTreeStub = makeMapFamilyTree();
  const apiStub = makeApi();
  const sut = new GetPokemonInformation(mapFamilyTreeStub, apiStub);

  return {
    sut,
    mapFamilyTreeStub,
    apiStub,
  };
};

describe('GetPokemonInformations Usecase', () => {
  test('Should call MapFamilyTree usecase with correct values', async () => {
    const { sut, mapFamilyTreeStub } = makeSut();
    const familyTreeSpy = jest.spyOn(mapFamilyTreeStub, 'execute')
    await sut.execute({ pokemon: '1' })
    expect(familyTreeSpy).toHaveBeenCalledWith({ pokemonId: '1' })
  });
});
