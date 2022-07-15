import { PokemonInformationsRequester } from '../../../domain/adapters';
import { IPokemonData } from '../../../domain/adapters/responses';
import { IGetPokemonInformation, IMapFamilyTree } from '../../../domain/usecases';
import { left, right } from '../../../domain/shared/utils/either';

import { makeFamilyTree, makePokemonData, makePokemonInformations } from './mocks';

import { GetPokemonInformation } from '../get-pokemon-informations';

const makeMapFamilyTree = (): IMapFamilyTree => {
  class MapFamilyTreeStub implements IMapFamilyTree {
    async execute(params: IMapFamilyTree.Params): IMapFamilyTree.Result {
      // return new Promise((resolve) => resolve(right(makeFamilyTree())));
      return new Promise((resolve) => resolve(right(makeFamilyTree())));
    }
  }

  return new MapFamilyTreeStub();
};

const makeApi = (): PokemonInformationsRequester => {
  class PokemonInformationsRequesterStub implements PokemonInformationsRequester {
    async informations(pokemon: string): Promise<IPokemonData> {
      return new Promise((resolve) => resolve(makePokemonData()));
    }
  }

  return new PokemonInformationsRequesterStub();
};

interface SutTypes {
  sut: IGetPokemonInformation;
  mapFamilyTreeStub: IMapFamilyTree;
  PokemonInformationsRequesterStub: PokemonInformationsRequester;
}

const makeSut = (): SutTypes => {
  const mapFamilyTreeStub = makeMapFamilyTree();
  const PokemonInformationsRequesterStub = makeApi();
  const sut = new GetPokemonInformation(mapFamilyTreeStub, PokemonInformationsRequesterStub);

  return {
    sut,
    mapFamilyTreeStub,
    PokemonInformationsRequesterStub,
  };
};

describe('GetPokemonInformations Usecase', () => {
  test('Should call MapFamilyTree usecase with correct values', async () => {
    const { sut, mapFamilyTreeStub } = makeSut();
    const familyTreeSpy = jest.spyOn(mapFamilyTreeStub, 'execute');
    await sut.execute({ pokemon: '1' });
    expect(familyTreeSpy).toHaveBeenCalledWith({ pokemonId: '1' });
  });

  test('Should return a left error when MapFamilyTree usecase trowns', async () => {
    const { sut, mapFamilyTreeStub } = makeSut();
    jest
      .spyOn(mapFamilyTreeStub, 'execute')
      .mockReturnValueOnce(new Promise((resolve) => resolve(left(Error()))));
    const promise = sut.execute({ pokemon: '1' });
    await expect(promise).resolves.toEqual(left(Error()));
  });

  test('Should call PokemonInformationsRequester with correct values', async () => {
    const { sut, PokemonInformationsRequesterStub } = makeSut();
    const informationsSpy = jest.spyOn(PokemonInformationsRequesterStub, 'informations');
    await sut.execute({ pokemon: '1' });
    expect(informationsSpy).toHaveBeenCalledWith('1');
  });

  test('Should return a left error when PokemonInformationsRequester trowns', async () => {
    const { sut, PokemonInformationsRequesterStub } = makeSut();
    jest
      .spyOn(PokemonInformationsRequesterStub, 'informations')
      .mockReturnValueOnce(new Promise((resolve, reject) => reject(Error())));
    const promise = sut.execute({ pokemon: '1' });
    await expect(promise).resolves.toEqual(left(Error()));
  });

  test('Should GetPokemonInformation usecase return a pokemonInformations on success', async () => {
    const { sut } = makeSut();
    const informations = await sut.execute({ pokemon: '1' });
    expect(informations).toEqual(right(makePokemonInformations()));
  });
});
