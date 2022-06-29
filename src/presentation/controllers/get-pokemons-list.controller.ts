import { IGetPokemonsList } from '@src/domain/features';
import { IController } from '../protocols';
import { badRequest, ok } from '../helpers/http-helper';

export class GetPokemonsListController implements IController {
  private readonly getPokemonsListFeature: IGetPokemonsList;

  constructor(getPokemonsListFeature: IGetPokemonsList) {
    this.getPokemonsListFeature = getPokemonsListFeature;
  }

  async handle() {
    const result = await this.getPokemonsListFeature.execute();
    console.log(result);

    if (result.isLeft()) {
      return badRequest(result.value);
    }

    return ok(result.value);
  }
}
