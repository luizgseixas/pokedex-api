import { IFamilyTreeRequester } from '../../../../domain/adapters';
import { IEvolutionChain } from '../../../../domain/adapters/responses';
import { failure, success } from '../../../../domain/shared/utils/either';
import { IMapFamilyTree } from '../../../../domain/usecases/pokemon';
import { MapFamilyTree } from './map-family-tree';
import {
  makeFamilyTreeOne,
  makeFamilyTreeTwo,
  makeFamilyTreeThree,
  makeFamilyTreeAll,
  makeOneEvolutionChain,
  makeTwoEvolutionChain,
  makeThreeEvolutionChain,
  makeAllEvolutionChain,
} from './map-family-tree.mock';

const makeFamilyTreeRequester = (): IFamilyTreeRequester => {
  class FamilyTreeRequesterStub implements IFamilyTreeRequester {
    async familyTree (pokemonId: string): Promise<IEvolutionChain> {
      return new Promise((resolve) => resolve(makeThreeEvolutionChain()));
    }
  }

  return new FamilyTreeRequesterStub();
};

interface ISutTypes {
  sut: IMapFamilyTree;
  familyTreeRequesterStub: IFamilyTreeRequester;
}

const sutParam = { id: '1' };

const makeSut = (): ISutTypes => {
  const familyTreeRequesterStub = makeFamilyTreeRequester();
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
      .mockReturnValueOnce(new Promise((resolve, rejects) => rejects(new Error())));
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
