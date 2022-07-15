import { PokemonInformationsModel } from '../models/pokemon-informations';
import { Either } from '../shared/utils/either';

export interface IGetPokemonInformation {
  execute: (params: IGetPokemonInformation.Params) => IGetPokemonInformation.Result;
}

export namespace IGetPokemonInformation {
  export type Params = {
    pokemon: string;
  };

  export type Result = Promise<Either<Error, PokemonInformationsModel>>;
}
