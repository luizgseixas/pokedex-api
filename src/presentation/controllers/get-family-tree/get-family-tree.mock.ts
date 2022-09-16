import { IFamilyTreeModel } from '@src/domain/models/family-tree';

export const makeFamilyTree = (): IFamilyTreeModel[] => ([
  {
    evolution_lvl: 1,
    name: 'any_name',
    evolution_details: null,
  },
  {
    evolution_lvl: 2,
    name: 'any_name',
    evolution_details: {
      min_level: 16,
      trigger: 'level-up',
    },
  },
  {
    evolution_lvl: 3,
    name: 'any_name',
    evolution_details: {
      min_level: 32,
      trigger: 'level-up',
    },
  },
]);
