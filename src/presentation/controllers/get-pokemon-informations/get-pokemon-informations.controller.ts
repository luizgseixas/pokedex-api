import { IGetPokemonInformations } from '@src/domain/usecases/pokemon';
import { ok, serverError } from '../../helpers/http-helper';
import { HttpRequest, HttpResponse, IController } from '../../protocols';

export class GetPokemonInformationsController implements IController {
  constructor (private readonly getPokemonInformation: IGetPokemonInformations) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;

    const result = await this.getPokemonInformation.execute({ id });

    console.log(result);

    if (result.isFailure()) {
      return serverError(result.value);
    }

    return ok(result.value);
  }
}
