import { IGetPokemonsList } from '@src/domain/usecases/pokemon';
import { IHttpRequest, IController } from '../../protocols';
import { ok, serverError } from '../../helpers/http-helper';

export class GetPokemonsListController implements IController {
  constructor (private readonly getPokemonsList: IGetPokemonsList) {}

  async handle (httpRequest: IHttpRequest) {
    const result = await this.getPokemonsList.execute(httpRequest?.query);

    if (result.isFailure()) {
      return serverError(result.value);
    }

    return ok(result.value);
  }
}
