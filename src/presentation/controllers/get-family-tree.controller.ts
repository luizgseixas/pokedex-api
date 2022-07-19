import { IController } from '@src/presentation/protocols/controller';
import { IMapFamilyTree } from '@src/domain/usecases';
import { HttpRequest } from '../protocols';
import { badRequest, ok, serverError } from '../helpers/http-helper';
import { MissingParamError } from '../errors/missing-param-error';

export class GetFamilyTreeController implements IController {
  private readonly getFamilyTree: IMapFamilyTree;

  constructor(getFamilyTree: IMapFamilyTree) {
    this.getFamilyTree = getFamilyTree;
  }

  async handle(httpRequest: HttpRequest) {
    if (!httpRequest.params) return badRequest(new MissingParamError());
    const result = await this.getFamilyTree.execute(httpRequest.params);

    if (result.isLeft()) {
      return serverError(result.value);
    }
    return ok(result.value);
  }
}
