import { IGetPokemonsList } from '@src/domain/usecases';
import { failure, success } from '@src/domain/shared/utils/either';
import { IPokemonsListRequester } from '@src/domain/adapters/pokemon-list';
import { Environment } from '@src/main/config/env';

export class GetPokemonsList implements IGetPokemonsList {
  constructor (private readonly api: IPokemonsListRequester) {}

  public async execute (params?: IGetPokemonsList.Params): IGetPokemonsList.Result {
    try {
      const data = await this.api.lists(params?.offset, params?.limit);

      const next = data.next ? data.next.split('?')[1] : null;
      const previous = data.previous ? data.previous.split('?')[1] : null;

      data.next = next != null ? `${Environment.API_URL}?${next}` : null;
      data.previous = previous != null ? `${Environment.API_URL}?${previous}` : null;

      return success(data);
    } catch (err) {
      // TODO: criar erro especifico e melhor tratativa
      console.error(err);
      return failure(new Error());
    }
  }
}
