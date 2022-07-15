import { FamilyTreeRequester } from '@src/domain/adapters';
import { IEvolutionChain } from '@src/domain/adapters/responses';
import { left, right } from '@src/domain/shared/utils/either';
import { IMapFamilyTree } from '@src/domain/usecases';
import { MapFamilyTree } from '../map-family-tree';
import {
  makeEvolutionChain,
  makeFirstAndSecondEvolutionChain,
  makeFirstEvolutionChain,
} from './mocks';

const makeFamilyTreeRequester = (): FamilyTreeRequester => {
  class familyTreeRequesterStub implements FamilyTreeRequester {
    async familyTree(pokemonId: string): Promise<IEvolutionChain> {
      return new Promise((resolve) => resolve(makeEvolutionChain()));
    }
  }

  return new familyTreeRequesterStub();
};

interface SutTypes {
  sut: IMapFamilyTree;
  familyTreeRequesterStub: FamilyTreeRequester;
}

const sutParam = { pokemonId: '1' };

const makeSut = (): SutTypes => {
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

  test('Should return familyTreeRequester a left error if familyTreeRequester thword', async () => {
    const { sut, familyTreeRequesterStub } = makeSut();
    jest
      .spyOn(familyTreeRequesterStub, 'familyTree')
      .mockReturnValueOnce(new Promise((resolve, rejects) => rejects(new Error())));
    const promise = sut.execute(sutParam);
    expect(promise).resolves.toEqual(left(Error()));
  });

  test("Should return only first_evolution if don't have more evolutions on success", async () => {
    const { sut, familyTreeRequesterStub } = makeSut();
    jest
      .spyOn(familyTreeRequesterStub, 'familyTree')
      .mockReturnValueOnce(new Promise((resolve) => resolve(makeFirstEvolutionChain())));
    const familyTree = await sut.execute(sutParam);
    console.log(familyTree);
    expect(familyTree).toEqual(
      right({
        first_evolution: {
          name: 'any_name',
        },
      }),
    );
  });

  test("Should return only first_evolution and second_evolution if don't have more evolutions on success", async () => {
    const { sut, familyTreeRequesterStub } = makeSut();
    jest
      .spyOn(familyTreeRequesterStub, 'familyTree')
      .mockReturnValueOnce(new Promise((resolve) => resolve(makeFirstAndSecondEvolutionChain())));
    const familyTree = await sut.execute(sutParam);
    expect(familyTree).toEqual(
      right({
        first_evolution: {
          name: 'any_name',
        },
        second_evolution: {
          evolves_details: {
            min_level: 16,
          },
          name: 'any_name',
        },
      }),
    );
  });

  test('Should return all three evolutions on success', async () => {
    const { sut } = makeSut();
    const familyTree = await sut.execute(sutParam);
    expect(familyTree).toEqual(
      right({
        first_evolution: {
          name: 'any_name',
        },
        second_evolution: {
          evolves_details: {
            min_level: 16,
          },
          name: 'any_name',
        },
        third_evolution: {
          evolves_details: {
            min_level: 32,
          },
          name: 'any_name',
        },
      }),
    );
  });
});
