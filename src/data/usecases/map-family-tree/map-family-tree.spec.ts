import { IFamilyTreeRequester } from '../../../domain/adapters';
import { failure, success } from '../../../domain/shared/utils/either';
import { throwError } from '../../../domain/tests';
import { IMapFamilyTree } from '../../../domain/usecases';
import { mockFamilyTreeRequester } from '../../test';
import { MapFamilyTree } from './map-family-tree';
import {
  makeAllEvolutionChain, makeFamilyTreeAll, makeFamilyTreeOne, makeFamilyTreeThree, makeFamilyTreeTwo, makeOneEvolutionChain,
  makeTwoEvolutionChain,
} from './map-family-tree.mock';

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

  test('Should return familyTreeRequester a failure error if familyTreeRequester thword', async () => {
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
      .mockReturnValueOnce(new Promise((resolve) => resolve(makeOneEvolutionChain())));
    const familyTree = await sut.execute(sutParam);
    expect(familyTree).toEqual(
      success(makeFamilyTreeOne()),
    );
  });

  test("Should return only first_evolution and second_evolution if don't have more evolutions on success", async () => {
    const { sut, familyTreeRequesterStub } = makeSut();
    jest
      .spyOn(familyTreeRequesterStub, 'familyTree')
      .mockReturnValueOnce(new Promise((resolve) => resolve(makeTwoEvolutionChain())));
    const familyTree = await sut.execute(sutParam);
    expect(familyTree).toEqual(
      success(makeFamilyTreeTwo()),
    );
  });

  test("Should return three evolutions if don't have more evolutions on success", async () => {
    const { sut } = makeSut();
    const familyTree = await sut.execute(sutParam);
    expect(familyTree).toEqual(
      success(makeFamilyTreeThree()),
    );
  });

  test('Should return all evolutions on success', async () => {
    const { sut, familyTreeRequesterStub } = makeSut();
    jest
      .spyOn(familyTreeRequesterStub, 'familyTree')
      .mockReturnValueOnce(new Promise((resolve) => resolve(makeAllEvolutionChain())));
    const familyTree = await sut.execute(sutParam);
    expect(familyTree).toEqual(
      success(makeFamilyTreeAll()),
    );
  });
});
