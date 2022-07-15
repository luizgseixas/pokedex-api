import { IGetPokemonsList } from '@src/domain/usecases';
import { left, right } from '@src/domain/shared/utils/either';
import { PokemonsListRequester } from '@src/domain/adapters/pokemon-list';

export class GetPokemonsList implements IGetPokemonsList {
  private readonly api: PokemonsListRequester;

  constructor(api: PokemonsListRequester) {
    this.api = api;
  }

  public async execute(params?: IGetPokemonsList.Params): IGetPokemonsList.Result {
    try {
      const data = await this.api.lists(params?.offset, params?.limit);

      return right(data);
    } catch (err) {
      console.error(err);
      return left(err);
    }
  }
}
