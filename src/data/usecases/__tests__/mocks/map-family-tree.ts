import { FamilyTreeModel } from "@src/domain/models/family-tree";

export const makeFamilyTree = (): FamilyTreeModel => ({
  first_evolution: {
    name: 'any_name',
  },
  second_evolution: {
    name: 'any_name',
    evolves_details: {},
  },

  third_evolution: {
    name: 'any_name',
    evolves_details: {},
  },
});