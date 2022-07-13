import { GetFamilyTreeController } from 'src/presentation/controllers/get-family-tree.controller';
import { MapFamilyTree } from 'src/data/usecases';
import { IController } from 'src/presentation/protocols';
import { PokemonApiRequester } from '@src/adapters/poke-api/api';

export const makeGetFamilyTreeController = (): IController => {
  const api = new PokemonApiRequester();
  const mapFamilyTree = new MapFamilyTree(api);
  return new GetFamilyTreeController(mapFamilyTree);
};
