import { IMapFamilyTree } from '@src/domain/usecases';
import { IController } from '@src/presentation/protocols/controller';
import { MissingParamError } from '../errors/missing-param-error';
import { badRequest, ok, serverError } from '../helpers/http-helper';
import { HttpRequest } from '../protocols';

export class GetFamilyTreeController implements IController {
  private readonly getFamilyTree: IMapFamilyTree;

  constructor (getFamilyTree: IMapFamilyTree) {
    this.getFamilyTree = getFamilyTree;
  }

  async handle (httpRequest: HttpRequest) {
    if (!httpRequest.params) return badRequest(new MissingParamError('pokemonId'));
    const result = await this.getFamilyTree.execute(httpRequest.params);

    if (result.isFailure()) {
      return serverError(result.value);
    }
    return ok(result.value);
  }
}
