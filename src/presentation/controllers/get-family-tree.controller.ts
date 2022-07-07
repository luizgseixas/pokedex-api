import { IController } from '@src/presentation/protocols/controller';
import { IMapFamilyTree } from '@src/domain/usecases';
import { HttpRequest } from '../protocols';
import { badRequest, ok } from '../helpers/http-helper';

export class GetFamilyTreeController implements IController {
  private readonly getFamilyTreeFeature: IMapFamilyTree;

  constructor(getFamilyTreeFeature: IMapFamilyTree) {
    this.getFamilyTreeFeature = getFamilyTreeFeature;
  }

  async handle(httpRequest: HttpRequest) {
    const result = await this.getFamilyTreeFeature.execute(httpRequest.params);

    if (result.isLeft()) {
      return badRequest(result.value);
    }
    return ok(result.value);
  }
}
