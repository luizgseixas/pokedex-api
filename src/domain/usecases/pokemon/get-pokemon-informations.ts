import { PokemonInformationsModel } from '../../models/pokemon/pokemon-informations';
import { Either } from '../../shared/utils/either';

export interface IGetPokemonInformations {
  execute: (params: IGetPokemonInformations.Params) => IGetPokemonInformations.Result;
}

export namespace IGetPokemonInformations {
  export type Params = {
    id: string;
  };

  export type Result = Promise<Either<Error, PokemonInformationsModel>>;
}
