import { IGetPokemonsList } from '@src/domain/usecases';
import { left, right } from 'src/domain/shared/utils/either';
import { IPokemonApi } from '@src/domain/adapters/api';

export class GetPokemonsList implements IGetPokemonsList {
  private readonly api: IPokemonApi;

  constructor(api: IPokemonApi) {
    this.api = api;
  }

  public async execute({ offset, limit }: IGetPokemonsList.Params): IGetPokemonsList.Result {
    try {
      const data = await this.api.getPokemonLists(offset, limit);

      return right(data);
    } catch (err) {
      console.error(err);
      return left(err);
    }
  }
}
