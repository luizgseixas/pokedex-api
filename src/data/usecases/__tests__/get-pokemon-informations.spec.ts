import { PokemonInformationsRequester } from '../../../domain/adapters';
import { IPokemonData } from '../../../domain/adapters/responses';
import { IGetPokemonInformation, IMapFamilyTree } from '../../../domain/usecases';
import { left, right } from '../../../domain/shared/utils/either';

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

  test('Should return a left error when MapFamilyTree usecase trowns', async () => {
    const { sut, mapFamilyTreeStub } = makeSut();
    jest.spyOn(mapFamilyTreeStub, 'execute')
      .mockReturnValueOnce(new Promise((resolve) => resolve(left(Error()))))
    const promise = sut.execute({ pokemon: '1' })
    await expect(promise).resolves.toEqual(left(Error()))
  });

  test('Should call PokemonInformationsRequester with correct values', async () => {
    const { sut, apiStub } = makeSut();
    const informationsSpy = jest.spyOn(apiStub, 'informations')
    await sut.execute({ pokemon: '1' })
    expect(informationsSpy).toHaveBeenCalledWith('1')
  });

  test('Should return a left error when PokemonInformationsRequester trowns', async () => {
    const { sut, apiStub } = makeSut();
    jest.spyOn(apiStub, 'informations')
      .mockReturnValueOnce(new Promise((resolve, reject) => reject(Error())))
    const promise = sut.execute({ pokemon: '1' })
    await expect(promise).resolves.toEqual(left(Error()))
  });
});
