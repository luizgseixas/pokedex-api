import { failure, success } from '@src/domain/shared/utils/either';
import { IGetPokemonInformations, IMapFamilyTree } from '@src/domain/usecases';
import { IPokemonInformationsRequester } from '@src/data/contracts/apis';
import { mockMapFamilyTree, mockPokemonInformationsRequester } from '@src/data/test';
import { mockPokemonInformations } from '@src/domain/test';
import { GetPokemonInformationUseCase } from './get-pokemon-informations';

const sutParam = { id: '1' };

type SutTypes = {
  sut: IGetPokemonInformations;
  mapFamilyTreeStub: IMapFamilyTree;
  PokemonInformationsRequesterStub: IPokemonInformationsRequester;
};

const makeSut = (): SutTypes => {
  const mapFamilyTreeStub = mockMapFamilyTree();
  const PokemonInformationsRequesterStub = mockPokemonInformationsRequester();
  const sut = new GetPokemonInformationUseCase(PokemonInformationsRequesterStub, mapFamilyTreeStub);

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
    jest.spyOn(mapFamilyTreeStub, 'execute').mockReturnValueOnce(Promise.resolve(failure(Error())));
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
    jest.spyOn(PokemonInformationsRequesterStub, 'informations').mockReturnValueOnce(Promise.reject(Error()));
    const promise = sut.execute(sutParam);
    await expect(promise).resolves.toEqual(failure(Error()));
  });

  test('Should GetPokemonInformation usecase return a pokemonInformations on success', async () => {
    const { sut } = makeSut();
    const informations = await sut.execute(sutParam);
    expect(informations).toEqual(success(mockPokemonInformations()));
  });
});
