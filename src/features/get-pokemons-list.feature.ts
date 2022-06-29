import { IGetPokemonsList } from '@src/domain/features';
import { PokemonApi } from '@src/adapters/poke-api/api';
import { left, right } from 'src/domain/shared/utils/either';

export class GetPokemonsListFeature implements IGetPokemonsList {
  private api: PokemonApi;
  constructor() {
    this.api = new PokemonApi();
  }

  public async execute(): IGetPokemonsList.Result {
    try {
      const { data } = await this.api.getPokemonLists();

      if (!data) return left(0);

      return right(data);
    } catch (error) {
      console.error(error);
      throw new Error();
    }
  }
}
