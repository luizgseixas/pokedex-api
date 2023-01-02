import { GetFamilyTreeController } from './get-family-tree.controller';
import { HttpRequest } from '../../protocols';
import { IMapFamilyTree } from '../../../domain/usecases/map-family-tree';
import { mockFamilyTreeThree } from '../../../domain/test';
import { ok, serverError } from '../../helpers/http-helper';
import { mockMapFamilyTree } from '../../test';
import { failure } from '../../../domain/shared/utils/either';

const mockHttpRequest = (): HttpRequest => ({
  params: {
    id: '1',
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
    await sut.handle(mockHttpRequest());
    expect(mapSpy).toHaveBeenCalledWith({ id: '1' });
  });

  test('Should return 500 if mapFamilyTree returns a failure error', async () => {
    const { sut, mapFamilyTreeStub } = makeSut();
    jest.spyOn(mapFamilyTreeStub, 'execute').mockReturnValueOnce(Promise.resolve(failure(new Error())));
    const httpResponse = sut.handle(mockHttpRequest());
    expect(httpResponse).resolves.toEqual(serverError(new Error()));
  });

  test('Sould return 200 on success', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle(mockHttpRequest());
    expect(httpResponse).toEqual(ok(mockFamilyTreeThree()));
  });
});
