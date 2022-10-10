import { GetFamilyTreeController } from './get-family-tree.controller';
import { makeFamilyTree } from './get-family-tree.mock';
import { IHttpRequest } from '../../protocols';
import { IMapFamilyTree } from '../../../domain/usecases/map-family-tree';
import { throwError } from '../../../domain/tests';
import { ok, serverError } from '../../helpers/http-helper';
import { mockMapFamilyTree } from '../../test';

const mockRequest = (): IHttpRequest => ({
  params: {
    pokemonId: '1',
  },
});

type SutTypes = {
  sut: GetFamilyTreeController
  mapFamilyTreeStub: IMapFamilyTree
}

const makeSut = (): SutTypes => {
  const mapFamilyTreeStub = mockMapFamilyTree();
  const sut = new GetFamilyTreeController(mapFamilyTreeStub);

  return {
    sut,
    mapFamilyTreeStub,
  };
};

describe('GetFamilyTree Controller', () => {
  test('Should call mapFamilyTree with correct value', async () => {
    const { sut, mapFamilyTreeStub } = makeSut();
    const mapSpy = jest.spyOn(mapFamilyTreeStub, 'execute');
    await sut.handle(mockRequest());
    expect(mapSpy).toHaveBeenCalledWith('1');
  });

  test.skip('Should return 500 if mapFamilyTree returns a failure error', async () => {
    const { sut, mapFamilyTreeStub } = makeSut();
    jest.spyOn(mapFamilyTreeStub, 'execute').mockImplementationOnce(throwError);
    const httpResponse = await sut.handle(mockRequest());
    expect(httpResponse).toEqual(serverError(new Error()));
  });

  test('Sould return 200 on success', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle(mockRequest());
    expect(httpResponse).toEqual(ok(makeFamilyTree()));
  });
});
