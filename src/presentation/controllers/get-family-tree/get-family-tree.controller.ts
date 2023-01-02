import { IMapFamilyTree } from '@src/domain/usecases';
import { IController } from '@src/presentation/protocols/controller';
import { ok, serverError } from '../../helpers/http-helper';
import { HttpRequest } from '../../protocols';

export class GetFamilyTreeController implements IController {
  constructor (private readonly mapFamilyTree: IMapFamilyTree) {}

  async handle (httpRequest: HttpRequest) {
    const { id } = httpRequest.params;

    const result = await this.mapFamilyTree.execute({ id });

    if (result.isFailure()) {
      return serverError(result.value);
    }
    return ok(result.value);
  }
}
