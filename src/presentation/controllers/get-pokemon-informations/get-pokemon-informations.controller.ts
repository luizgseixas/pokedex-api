import { IGetPokemonInformations } from '@src/domain/usecases';
import { MissingParamError } from '@src/presentation/errors/missing-param-error';
import { IHttpRequest, IHttpResponse, IController } from '../../protocols';
import { badRequest, ok, serverError } from '../../helpers/http-helper';

export class GetPokemonInformationsController implements IController {
  constructor (private readonly getPokemonInformation: IGetPokemonInformations) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { id } = httpRequest.params;

    const result = await this.getPokemonInformation.execute({ id });

    console.log(result);

    if (result.isFailure()) {
      return serverError(result.value);
    }

    return ok(result.value);
  }
}
