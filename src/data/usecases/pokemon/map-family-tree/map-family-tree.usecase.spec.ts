import { IFamilyTreeRequester, ISpeciesRequester, SpeciesResponse } from '@src/data/contracts/apis';
import { failure, success } from '@src/domain/shared/utils/either';
import {
  mockFamilyTreeAll,
  mockFamilyTreeOne, mockFamilyTreeThree, mockFamilyTreeTwo, mockPrimitiveAllEvolutionChain, mockPrimitiveOneEvolutionChain, mockPrimitiveTwoEvolutionChain, mockSpecies, throwError,
} from '@src/domain/test';
import { IMapFamilyTree } from '@src/domain/usecases/pokemon';
import { mockFamilyTreeRequester, mockSpeciesRequester } from '@src/data/test';
import { MapFamilyTreeUseCase } from './map-family-tree.usecase';

type SutTypes = {
  sut: IMapFamilyTree;
  speciesRequesterStub: ISpeciesRequester;
  familyTreeRequesterStub: IFamilyTreeRequester;
}

const sutParam = { id: '1' };

const makeSut = (): SutTypes => {
  const familyTreeRequesterStub = mockFamilyTreeRequester();
  const speciesRequesterStub = mockSpeciesRequester();
  const sut = new MapFamilyTreeUseCase(speciesRequesterStub, familyTreeRequesterStub);

  return {
    sut,
    speciesRequesterStub,
    familyTreeRequesterStub,
  };
};

describe('MapFamilyTree Usecase', () => {
  test('Should call familyTreeRequester with correct value', async () => {
    const { sut, familyTreeRequesterStub } = makeSut();
    const familyTreeRequesterSpy = jest.spyOn(familyTreeRequesterStub, 'familyTree');

    await sut.execute(sutParam);

    expect(familyTreeRequesterSpy).toHaveBeenCalledWith('1');
  });

  test('Should call speciesRequester with correct value', async () => {
    const { sut, speciesRequesterStub } = makeSut();
    const speciesRequesterSpy = jest.spyOn(speciesRequesterStub, 'species');

    await sut.execute(sutParam);

    expect(speciesRequesterSpy).toHaveBeenCalledWith('1');
  });

  test('Should return a failure error if familyTreeRequester throws', async () => {
    const { sut, familyTreeRequesterStub } = makeSut();
    jest
      .spyOn(familyTreeRequesterStub, 'familyTree')
      .mockImplementationOnce(throwError);

    const promise = sut.execute(sutParam);

    expect(promise).resolves.toEqual(failure(Error()));
  });

  test('Should return a failure error if speciesRequester throws', async () => {
    const { sut, speciesRequesterStub } = makeSut();
    jest
      .spyOn(speciesRequesterStub, 'species')
      .mockImplementationOnce(throwError);

    const promise = sut.execute(sutParam);

    expect(promise).resolves.toEqual(failure(Error()));
  });

  test("Should return only first_evolution if don't have more evolutions on success", async () => {
    const { sut, familyTreeRequesterStub } = makeSut();
    jest
      .spyOn(familyTreeRequesterStub, 'familyTree')
      .mockReturnValueOnce(Promise.resolve(mockPrimitiveOneEvolutionChain()));

    const familyTree = await sut.execute(sutParam);

    expect(familyTree).toEqual(
      success(mockFamilyTreeOne()),
    );
  });

  test("Should return only first_evolution and second_evolution if don't have more evolutions on success", async () => {
    const { sut, familyTreeRequesterStub } = makeSut();
    jest
      .spyOn(familyTreeRequesterStub, 'familyTree')
      .mockReturnValueOnce(Promise.resolve(mockPrimitiveTwoEvolutionChain()));

    const familyTree = await sut.execute(sutParam);

    expect(familyTree).toEqual(
      success(mockFamilyTreeTwo()),
    );
  });

  test("Should return three evolutions if don't have more evolutions on success", async () => {
    const { sut } = makeSut();

    const familyTree = await sut.execute(sutParam);

    expect(familyTree).toEqual(
      success(mockFamilyTreeThree()),
    );
  });

  test('Should return all evolutions on success', async () => {
    const { sut, familyTreeRequesterStub } = makeSut();
    jest
      .spyOn(familyTreeRequesterStub, 'familyTree')
      .mockReturnValueOnce(Promise.resolve(mockPrimitiveAllEvolutionChain()));

    const familyTree = await sut.execute(sutParam);

    expect(familyTree).toEqual(
      success(mockFamilyTreeAll()),
    );
  });
});
