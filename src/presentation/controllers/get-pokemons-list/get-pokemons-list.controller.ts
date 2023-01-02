import { IGetPokemonsList } from '@src/domain/usecases';
import { HttpRequest, IController } from '../../protocols';
import { ok, serverError } from '../../helpers/http-helper';

export class GetPokemonsListController implements IController {
  constructor (private readonly getPokemonsList: IGetPokemonsList) {}

  async handle (httpRequest: HttpRequest) {
    const { offset, limit } = httpRequest.query;

    const result = await this.getPokemonsList.execute({ offset, limit });

    if (result.isFailure()) {
      return serverError(result.value);
    }

    return ok(result.value);
  }
}
