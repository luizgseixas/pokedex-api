import { IGetPokemonInformations } from '@src/domain/usecases';
import { IHttpRequest, IHttpResponse, IController } from '../../protocols';
import { ok, serverError } from '../../helpers/http-helper';

export class GetPokemonInformationsController implements IController {
  constructor (private readonly getPokemonInformation: IGetPokemonInformations) {}

  async handle (httpRequest?: IHttpRequest | undefined): Promise<IHttpResponse> {
    const result = await this.getPokemonInformation.execute(httpRequest?.params);

    if (result.isFailure()) {
      return serverError(result.value);
    }

    return ok(result.value);
  }
}
