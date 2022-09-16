import { Either } from '../../shared/utils/either';
import { IPokemonsListModel } from '../../models/pokemons-list';

export interface IGetPokemonsList {
  execute: (params?: IGetPokemonsList.Params) => IGetPokemonsList.Result;
}

export namespace IGetPokemonsList {
  export type Params = {
    offset?: string;
    limit?: string;
  };

  export type Result = Promise<Either<Error, IPokemonsListModel>>;
}
