import { GetPokemonInformation } from '../get-pokemon-informations';
import { IGetPokemonInformation, IMapFamilyTree } from '@src/domain/usecases';
import { right } from '@src/domain/shared/utils/either';
import { IPokemonApi } from '@src/domain/adapters/api';

const makeMapFamilyTree = (): IMapFamilyTree => {
  class MapFamilyTreeStub implements IMapFamilyTree {
    async execute(params: IMapFamilyTree.Params): IMapFamilyTree.Result {
      // return new Promise((resolve) => resolve(right(makeFamilyTree())));
      return right(makeFamilyTree());
    }
  }

  return new MapFamilyTreeStub();
};

const makeFamilyTree = () => ({
  first_evolution: {
    name: 'any_name',
  },
  second_evolution: {
    name: 'any_name',
    evolves_details: {},
  },

  third_evolution: {
    name: 'any_name',
    evolves_details: {},
  },
});

interface SutTypes {
  sut: IGetPokemonInformation;
  mapFamilyTreeStub: IMapFamilyTree;
  api: IPokemonApi;
}

const makeSut = (): SutTypes => {
  const mapFamilyTreeStub = makeMapFamilyTree();
  const;
  const sut = new GetPokemonInformation(mapFamilyTreeStub);

  return {
    sut,
    mapFamilyTreeStub,
  };
};

describe('GetPokemonInformations Usecase', () => {
  test('Should call MapFamilyTree with correct values', async () => {
    const { sut } = makeSut();
  });
});
