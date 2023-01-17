import { IGetPokemonsList } from '@src/domain/usecases/pokemon';
import { failure, success } from '@src/domain/shared/utils/either';
import { IPokemonsListRequester } from '@src/data/contracts/apis';
import { Environment } from '@src/main/config/env';

export class GetPokemonsListUseCase implements IGetPokemonsList {
  constructor (private readonly listRequester: IPokemonsListRequester) {}

  public async execute (params?: IGetPokemonsList.Params): IGetPokemonsList.Result {
    try {
      const data = await this.listRequester.lists(params?.offset, params?.limit);

      const withOutUrl = data.results.map((pokemon) => ({ name: pokemon.name }));

      const next = data.next ? data.next.split('?')[1] : null;
      const previous = data.previous ? data.previous.split('?')[1] : null;

      data.next = next != null ? `${Environment.API_URL}/pokemon/list?${next}` : null;
      data.previous = previous != null ? `${Environment.API_URL}/pokemon/list?${previous}` : null;
      data.results = withOutUrl;

      return success(data);
    } catch (err) {
      // TODO: criar erro especifico e melhor tratativa
      console.error(err);
      return failure(err);
    }
  }
}
