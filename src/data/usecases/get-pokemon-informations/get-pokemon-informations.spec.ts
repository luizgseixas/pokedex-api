import { GetPokemonInformation } from './get-pokemon-informations';
import { IGetPokemonInformations, IMapFamilyTree } from '../../../domain/usecases';
import { IPokemonInformationsRequester } from '../../../domain/adapters';
import { failure, success } from '../../../domain/shared/utils/either';
import { mockMapFamilyTree, mockPokemonInformationsRequester } from '../../test';
import { mockPokemonInformations } from '../../../domain/test';

const sutParam = { id: '1' };

type SutTypes = {
  sut: IGetPokemonInformations;
  mapFamilyTreeStub: IMapFamilyTree;
  PokemonInformationsRequesterStub: IPokemonInformationsRequester;
}

const makeSut = (): SutTypes => {
  const mapFamilyTreeStub = mockMapFamilyTree();
  const PokemonInformationsRequesterStub = mockPokemonInformationsRequester();
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
      .mockReturnValueOnce(Promise.resolve(failure(Error())));
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
      .mockReturnValueOnce(Promise.reject(Error()));
    const promise = sut.execute(sutParam);
    await expect(promise).resolves.toEqual(failure(Error()));
  });

  test('Should GetPokemonInformation usecase return a pokemonInformations on success', async () => {
    const { sut } = makeSut();
    const informations = await sut.execute(sutParam);
    expect(informations).toEqual(success(mockPokemonInformations()));
  });
});
