import { HttpRequest, HttpResponse, IController } from '../protocols';
import { IGetPokemonInformation } from '@src/domain/usecases';
import { badRequest, ok } from '../helpers/http-helper';

export class GetPokemonInformationController implements IController {
  private readonly getPokemonInformationFeature: IGetPokemonInformation;

  constructor(getPokemonInformationFeature: IGetPokemonInformation) {
    this.getPokemonInformationFeature = getPokemonInformationFeature;
  }

  async handle(httpRequest?: HttpRequest | undefined): Promise<HttpResponse> {
    const result = await this.getPokemonInformationFeature.execute(httpRequest?.params);

    if (result.isLeft()) {
      return badRequest(result.value);
    }

    return ok(result.value);
  }
}
