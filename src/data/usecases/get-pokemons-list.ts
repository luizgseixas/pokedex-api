import { IGetPokemonsList } from '@src/domain/usecases';
import { left, right } from 'src/domain/shared/utils/either';
import { PokemonsListRequester } from '@src/domain/adapters/pokemon-list';

export class GetPokemonsList implements IGetPokemonsList {
  private readonly api: PokemonsListRequester;

  constructor(api: PokemonsListRequester) {
    this.api = api;
  }

  public async execute({ offset, limit }: IGetPokemonsList.Params): IGetPokemonsList.Result {
    try {
      const data = await this.api.lists(offset, limit);

      return right(data);
    } catch (err) {
      console.error(err);
      return left(err);
    }
  }
}
