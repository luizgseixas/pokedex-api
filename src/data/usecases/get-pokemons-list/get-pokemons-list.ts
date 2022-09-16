import { IGetPokemonsList } from '@src/domain/usecases';
import { failure, success } from '@src/domain/shared/utils/either';
import { IPokemonsListRequester } from '@src/domain/adapters/pokemon-list';

export class GetPokemonsList implements IGetPokemonsList {
  constructor (private readonly api: IPokemonsListRequester) {}

  public async execute (params?: IGetPokemonsList.Params): IGetPokemonsList.Result {
    try {
      const data = await this.api.lists(params?.offset, params?.limit);

      const next = data.next ? data.next.split('?')[1] : null;
      const previous = data.previous ? data.previous.split('?')[1] : null;

      data.next = next != null ? `${process.env.API_URL}?${next}` : null;
      data.previous = previous != null ? `${process.env.API_URL}?${previous}` : null;

      return success(data);
    } catch (err) {
      return failure(err);
    }
  }
}
