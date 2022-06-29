import { IGetPokemonsList } from '@src/domain/features';
import { IController } from '../protocols';
import { ok, serverError } from '../helpers/http-helper';

export class GetPokemonsListController implements IController {
  private readonly getPokemonsListFeature: IGetPokemonsList;

  constructor(getPokemonsListFeature: IGetPokemonsList) {
    this.getPokemonsListFeature = getPokemonsListFeature;
  }

  async handle() {
    try {
      const list = await this.getPokemonsListFeature.execute();
      console.log(list);

      return ok(list);
    } catch (error: any) {
      console.error(error);
      return serverError(error);
    }
  }
}
