import { IGetPokemonsList } from '@src/domain/usecases';
import { PokemonApi } from '@src/adapters/poke-api/api';
import { left, right } from 'src/domain/shared/utils/either';

export class GetPokemonsListFeature implements IGetPokemonsList {
  private api: PokemonApi;

  constructor() {
    this.api = new PokemonApi();
  }

  public async execute({ offset, limit }: IGetPokemonsList.Params): IGetPokemonsList.Result {
    try {
      const { data } = await this.api.getPokemonLists(offset, limit);

      return right(data);
    } catch (err) {
      console.error(err);
      return left(err);
    }
  }
}
