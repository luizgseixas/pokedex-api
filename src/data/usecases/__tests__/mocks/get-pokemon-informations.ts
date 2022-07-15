import { IPokemonData } from "@src/domain/adapters/responses";
import { PokemonInformationsModel } from "@src/domain/models/pokemon-informations";
import { makeFamilyTree } from "./map-family-tree";

export const makePokemonData = (): IPokemonData => ({
  id: 1,
  name: 'any_name',
  height: 1,
  weight: 35,
  types: [{ type : { name: 'any_type' } }],
  stats: [{
    base_stat: 1,
    stat: { name: 'any_stat' },
  }],
  sprites: {
    front_default: 'any_sprite',
    front_shiny: 'any_sprite',
    front_female: 'any_sprite',
    front_shiny_female: 'any_sprite',
    back_default: 'any_sprite',
    back_shiny: 'any_sprite',
    back_female: 'any_sprite',
    back_shiny_female: 'any_sprite',
  },
  moves: [{
    move: {
      name: 'any_name',
      url: 'any_url',
    },
  }],
})

export const makePokemonInformations = (): PokemonInformationsModel => ({
  id: 1,
  name: 'any_name',
  types: [{ type : { name: 'any_type' } }],
  stats: [{
    base_stat: 1,
    stat: { name: 'any_stat' },
  }],
  sprites: {
    front_default: 'any_sprite',
    front_shiny: 'any_sprite',
    front_female: 'any_sprite',
    front_shiny_female: 'any_sprite',
    back_default: 'any_sprite',
    back_shiny: 'any_sprite',
    back_female: 'any_sprite',
    back_shiny_female: 'any_sprite',
  },
  moves: [{
    name: 'any_name',
    url: 'any_url',
  }],
  familyTree: makeFamilyTree()
})