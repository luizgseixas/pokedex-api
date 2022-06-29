import { PokemonApi } from '@src/adapters/poke-api/api';
import { IGetPokemonInformation } from '@src/domain/features';
import { left, right } from '@src/domain/shared/utils/either';

export class GetPokemonInformationFeature implements IGetPokemonInformation {
  private readonly api: PokemonApi;

  constructor() {
    this.api = new PokemonApi();
  }

  async execute({ pokemon }: IGetPokemonInformation.Params): IGetPokemonInformation.Result {
    try {
      console.log();
      const { data } = await this.api.getPokemonInformations(pokemon);

      return right(data);
    } catch (err) {
      console.error(err);
      return left(err);
    }
  }
}
