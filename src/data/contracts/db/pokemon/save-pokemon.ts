import { PokemonModel, TypeModel } from '@src/domain/models/pokemon';

export interface ISavePokemonRepository {
  save: (params: ISavePokemonRepository.Params) => ISavePokemonRepository.Result;
}

export namespace ISavePokemonRepository {
  export type Params = {
    name: string;
    heigth: number;
    weight: number;
    sprite_front_default: string;
    sprite_front_female: string;
    sprite_front_shiny: string;
    sprite_front_shiny_female: string;
    sprite_back_default: string;
    sprite_back_female: string;
    sprite_back_shiny: string;
    sprite_back_shiny_female: string;
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
    location_area: string;
    types: TypeModel[];
  }

  export type Result = Promise<void>;
}
