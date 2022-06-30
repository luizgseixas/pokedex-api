import { IGetPokemonsList } from '@src/domain/features';
import { HttpRequest, IController } from '../protocols';
import { badRequest, ok } from '../helpers/http-helper';

export class GetPokemonsListController implements IController {
  private readonly getPokemonsListFeature: IGetPokemonsList;

  constructor(getPokemonsListFeature: IGetPokemonsList) {
    this.getPokemonsListFeature = getPokemonsListFeature;
  }

  async handle(httpRequest: HttpRequest) {
    const result = await this.getPokemonsListFeature.execute(httpRequest?.query);
    console.log(result);

    if (result.isLeft()) {
      return badRequest(result.value);
    }

    return ok(result.value);
  }
}
