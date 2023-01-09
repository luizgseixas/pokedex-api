import { GetFamilyTreeController } from '@src/presentation/controllers';
import { MapFamilyTreeUseCase } from '@src/data/usecases';
import { IController } from '@src/presentation/protocols';
import { PokeApiRequester } from '@src/infra/api';

export const makeGetFamilyTreeController = (): IController => {
  const api = new PokeApiRequester();
  const mapFamilyTree = new MapFamilyTreeUseCase(api, api);
  return new GetFamilyTreeController(mapFamilyTree);
};
