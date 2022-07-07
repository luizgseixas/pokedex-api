import { IController } from '@src/presentation/protocols/controller';
import { IMapFamilyTree } from '@src/domain/usecases';
import { HttpRequest } from '../protocols';
import { badRequest, ok } from '../helpers/http-helper';

export class GetFamilyTreeController implements IController {
  private readonly getFamilyTree: IMapFamilyTree;

  constructor(getFamilyTree: IMapFamilyTree) {
    this.getFamilyTree = getFamilyTree;
  }

  async handle(httpRequest: HttpRequest) {
    const result = await this.getFamilyTree.execute(httpRequest.params);

    if (result.isLeft()) {
      return badRequest(result.value);
    }
    return ok(result.value);
  }
}
