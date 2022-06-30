import { GetFamilyTreeController } from 'src/presentation/controllers/get-family-tree.controller';
import { MapFamilyTreeFeature } from 'src/features';
import { IController } from 'src/presentation/protocols';

export const makeGetFamilyTreeController = (): IController => {
  const mapFamilyTreeFature = new MapFamilyTreeFeature();
  return new GetFamilyTreeController(mapFamilyTreeFature);
};
