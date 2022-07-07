import { IGetPokemonsList } from '@src/domain/usecases';
import { HttpRequest, IController } from '../protocols';
import { badRequest, ok } from '../helpers/http-helper';

export class GetPokemonsListController implements IController {
  private readonly getPokemonsList: IGetPokemonsList;

  constructor(getPokemonsList: IGetPokemonsList) {
    this.getPokemonsList = getPokemonsList;
  }

  async handle(httpRequest: HttpRequest) {
    const result = await this.getPokemonsList.execute(httpRequest?.query);
    console.log(result);

    if (result.isLeft()) {
      return badRequest(result.value);
    }

    return ok(result.value);
  }
}
