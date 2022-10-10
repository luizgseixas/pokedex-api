import { IMapFamilyTree } from '@src/domain/usecases';
import { IController } from '@src/presentation/protocols/controller';
import { MissingParamError } from '../../errors/missing-param-error';
import { badRequest, ok, serverError } from '../../helpers/http-helper';
import { IHttpRequest } from '../../protocols';

export class GetFamilyTreeController implements IController {
  constructor (private readonly getFamilyTree: IMapFamilyTree) {}

  async handle (httpRequest: IHttpRequest) {
    const { pokemonId } = httpRequest.params;

    const result = await this.getFamilyTree.execute(pokemonId);

    if (result.isFailure()) {
      return serverError(result.value);
    }
    return ok(result.value);
  }
}
