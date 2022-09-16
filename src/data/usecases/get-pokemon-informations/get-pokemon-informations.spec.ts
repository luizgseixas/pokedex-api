import { IPokemonInformationsRequester } from '../../../domain/adapters';
import { IPokemonData } from '../../../domain/adapters/responses';
import { IGetPokemonInformations, IMapFamilyTree } from '../../../domain/usecases';
import { failure, success } from '../../../domain/shared/utils/either';

import { makePokemonData, makePokemonInformations } from './get-pokemon-informations.mock';
import { makeFamilyTreeThree } from '../map-family-tree/map-family-tree.mock';

import { GetPokemonInformation } from './get-pokemon-informations';

const makeMapFamilyTree = (): IMapFamilyTree => {
  class MapFamilyTreeStub implements IMapFamilyTree {
    async execute (params: IMapFamilyTree.Params): IMapFamilyTree.Result {
      return new Promise((resolve) => resolve(success(makeFamilyTreeThree())));
    }
  }

  return new MapFamilyTreeStub();
};

const makeApi = (): IPokemonInformationsRequester => {
  class PokemonInformationsRequesterStub implements IPokemonInformationsRequester {
    async informations (id: string): Promise<IPokemonData> {
      return new Promise((resolve) => resolve(makePokemonData()));
    }
  }

  return new PokemonInformationsRequesterStub();
};

interface ISutTypes {
  sut: IGetPokemonInformations;
  mapFamilyTreeStub: IMapFamilyTree;
  PokemonInformationsRequesterStub: IPokemonInformationsRequester;
}

const sutParam = { id: '1' };

const makeSut = (): ISutTypes => {
  const mapFamilyTreeStub = makeMapFamilyTree();
  const PokemonInformationsRequesterStub = makeApi();
  const sut = new GetPokemonInformation(PokemonInformationsRequesterStub, mapFamilyTreeStub);

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
    await sut.execute(sutParam);
    expect(familyTreeSpy).toHaveBeenCalledWith({ id: '1' });
  });

  test('Should return a failure error when MapFamilyTree usecase trowns', async () => {
    const { sut, mapFamilyTreeStub } = makeSut();
    jest
      .spyOn(mapFamilyTreeStub, 'execute')
      .mockReturnValueOnce(new Promise((resolve) => resolve(failure(Error()))));
    const promise = sut.execute(sutParam);
    await expect(promise).resolves.toEqual(failure(Error()));
  });

  test('Should call PokemonInformationsRequester with correct values', async () => {
    const { sut, PokemonInformationsRequesterStub } = makeSut();
    const informationsSpy = jest.spyOn(PokemonInformationsRequesterStub, 'informations');
    await sut.execute(sutParam);
    expect(informationsSpy).toHaveBeenCalledWith('1');
  });

  test('Should return a failure error when PokemonInformationsRequester trowns', async () => {
    const { sut, PokemonInformationsRequesterStub } = makeSut();
    jest
      .spyOn(PokemonInformationsRequesterStub, 'informations')
      .mockReturnValueOnce(new Promise((resolve, reject) => reject(Error())));
    const promise = sut.execute(sutParam);
    await expect(promise).resolves.toEqual(failure(Error()));
  });

  test('Should GetPokemonInformation usecase return a pokemonInformations on success', async () => {
    const { sut } = makeSut();
    const informations = await sut.execute(sutParam);
    expect(informations).toEqual(success(makePokemonInformations()));
  });
});
