import { GetFamilyTreeController } from '../get-family-tree.controller';
import { IMapFamilyTree } from '../../../domain/usecases/map-family-tree'
import { makeFamilyTree } from './__mocks__/get-family-tree.mock'
import { HttpRequest } from '../../protocols';
import { left, right } from '../../../domain/shared/utils/either';
import { badRequest, ok, serverError } from '../../helpers/http-helper';

const makeMapFamilyTree = (): IMapFamilyTree => {
  class MapFamilyTreeStub implements IMapFamilyTree {
    async execute(params: IMapFamilyTree.Params): IMapFamilyTree.Result {
      return new Promise(resolve => resolve(right(makeFamilyTree())))
    }
  }

  return new MapFamilyTreeStub()
}

const makeFakeRequest = (): HttpRequest => ({
  params: {
    pokemonId: '1'
  }
})

interface SutTypes {
  sut: GetFamilyTreeController
  mapFamilyTreeStub: IMapFamilyTree
}

const makeSut = (): SutTypes => {
  const mapFamilyTreeStub = makeMapFamilyTree();
  const sut = new GetFamilyTreeController(mapFamilyTreeStub);

  return {
    sut,
    mapFamilyTreeStub
  }
}

describe('GetFamilyTree Controller', () => {
  test('Should call mapFamilyTree with correct value', async () => {
    const { sut, mapFamilyTreeStub } = makeSut();
    const mapSpy = jest.spyOn(mapFamilyTreeStub, 'execute')
    await sut.handle(makeFakeRequest());
    expect(mapSpy).toHaveBeenCalledWith({ pokemonId: '1' });
  })

  test('Should return 500 if mapFamilyTree returns a left error', async () => {
    const { sut, mapFamilyTreeStub } = makeSut();
    jest.spyOn(mapFamilyTreeStub, 'execute').mockReturnValueOnce(new Promise(resolve => resolve(left(new Error()))))
    const httpResponse = await sut.handle(makeFakeRequest());
    expect(httpResponse).toEqual(serverError(new Error()));
  })

  test('Sould return 200 on success', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle(makeFakeRequest());
    expect(httpResponse).toEqual(ok(makeFamilyTree()));
  })
})