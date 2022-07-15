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

      const next = data.next ? data.next.split('?')[1] : null;
      const previous = data.previous ? data.previous.split('?')[1] : null;

      console.log(next, previous);
      console.log(process.env.API_URL);

      data.next = next != null ? `${process.env.API_URL}?${next}` : null;
      data.previous = previous != null ? `${process.env.API_URL}?${previous}` : null;

      return right(data);
    } catch (err) {
      console.error(err);
      return left(err);
    }
  }
}
