import { PokemonModel } from '@src/domain/models/pokemon';

export interface IFindPokemonByName {
  execute: (parmas: IFindPokemonByName.Params) => IFindPokemonByName.Result
}

export namespace IFindPokemonByName {
  export type Params = {
    name: string;
  }

  export type Result = Promise<PokemonModel>;
}
