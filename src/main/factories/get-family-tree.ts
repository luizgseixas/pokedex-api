import { GetFamilyTreeController } from '@src/presentation/controllers';
import { MapFamilyTree } from '@src/data/usecases';
import { IController } from '@src/presentation/protocols';
import { PokeApiRequester } from '@src/infra/api';

export const makeGetFamilyTreeController = (): IController => {
  const api = new PokeApiRequester();
  const mapFamilyTree = new MapFamilyTree(api);
  return new GetFamilyTreeController(mapFamilyTree);
};
