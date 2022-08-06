import { IGetPokemonInformations } from '@src/domain/usecases';
import { HttpRequest, HttpResponse, IController } from '../protocols';
import { ok, serverError } from '../helpers/http-helper';

export class GetPokemonInformationsController implements IController {
  private readonly getPokemonInformation: IGetPokemonInformations;

  constructor (getPokemonInformation: IGetPokemonInformations) {
    this.getPokemonInformation = getPokemonInformation;
  }

  async handle (httpRequest?: HttpRequest | undefined): Promise<HttpResponse> {
    const result = await this.getPokemonInformation.execute(httpRequest?.params);

    if (result.isFailure()) {
      return serverError(result.value);
    }

    return ok(result.value);
  }
}
