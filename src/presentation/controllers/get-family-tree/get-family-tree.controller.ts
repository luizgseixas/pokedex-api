import { IMapFamilyTree } from '@src/domain/usecases/pokemon';
import { IController } from '@src/presentation/protocols/controller';
import { MissingParamError } from '../../errors/missing-param-error';
import { badRequest, ok, serverError } from '../../helpers/http-helper';
import { IHttpRequest } from '../../protocols';

export class GetFamilyTreeController implements IController {
  constructor (private readonly getFamilyTree: IMapFamilyTree) {}

  async handle (httpRequest: IHttpRequest) {
    if (!httpRequest.params) return badRequest(new MissingParamError('pokemonId'));
    const result = await this.getFamilyTree.execute(httpRequest.params);

    if (result.isFailure()) {
      return serverError(result.value);
    }
    return ok(result.value);
  }
}
