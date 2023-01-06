import { IFamilyTreeRequester } from '@src/data/contracts/apis';
import { failure, success } from '@src/domain/shared/utils/either';
import {
  mockFamilyTreeAll,
  mockFamilyTreeOne, mockFamilyTreeThree, mockFamilyTreeTwo, mockPrimitiveAllEvolutionChain, mockPrimitiveOneEvolutionChain, mockPrimitiveTwoEvolutionChain, throwError,
} from '@src/domain/test';
import { IMapFamilyTree } from '@src/domain/usecases';
import { mockFamilyTreeRequester } from '@src/data/test';
import { MapFamilyTree } from './map-family-tree';

type SutTypes = {
  sut: IMapFamilyTree;
  familyTreeRequesterStub: IFamilyTreeRequester;
}

const sutParam = { id: '1' };

const makeSut = (): SutTypes => {
  const familyTreeRequesterStub = mockFamilyTreeRequester();
  const sut = new MapFamilyTree(familyTreeRequesterStub);

  return {
    sut,
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

  test('Should return familyTreeRequester a failure error if familyTreeRequester throws', async () => {
    const { sut, familyTreeRequesterStub } = makeSut();
    jest
      .spyOn(familyTreeRequesterStub, 'familyTree')
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
    console.log('[familyTree on test', familyTree);
    console.log('[familyTreeMock on test', mockFamilyTreeAll());
    expect(familyTree).toEqual(
      success(mockFamilyTreeAll()),
    );
  });
});
