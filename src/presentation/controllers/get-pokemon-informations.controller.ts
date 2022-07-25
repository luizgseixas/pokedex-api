import { HttpRequest, HttpResponse, IController } from '../protocols';
import { IGetPokemonInformation } from '@src/domain/usecases';
import { badRequest, ok } from '../helpers/http-helper';

export class GetPokemonInformationsController implements IController {
  private readonly getPokemonInformation: IGetPokemonInformation;

  constructor(getPokemonInformation: IGetPokemonInformation) {
    this.getPokemonInformation = getPokemonInformation;
  }

  async handle(httpRequest?: HttpRequest | undefined): Promise<HttpResponse> {
    const result = await this.getPokemonInformation.execute(httpRequest?.params);

    if (result.isLeft()) {
      return badRequest(result.value);
    }

    return ok(result.value);
  }
}
