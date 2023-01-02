import { Chain } from '@src/domain/adapters/responses';
import { FamilyTreeModel } from '@src/domain/models/pokemon/family-tree';

export const evolutionsDetailsFilter = (arr: Array<any>): any => {
  if (arr.length === 0) return null;

  const evolutions = arr.map((datail) => Object.keys(datail).reduce((newObj, key) => {
    const value = datail[key];
    if (value !== null && value !== false && value !== '') {
      if (key === 'trigger') {
        newObj[key] = value.name;
      } else {
        newObj[key] = value;
      }
    }
    return newObj;
  }, {}))[0];

  return evolutions;
};

export const chainFilter = (chain: Chain, count: number = 1): FamilyTreeModel[] => {
  let evolutions: FamilyTreeModel[] = [];

  evolutions.push({
    evolution_lvl: count,
    name: chain.species.name,
    evolution_details: evolutionsDetailsFilter(chain.evolution_details),
  });

  if (chain.evolves_to.length > 0) {
    chain.evolves_to.forEach((evolution, index) => {
      count += 1;

      evolutions.push({
        evolution_lvl: count,
        name: evolution.species.name,
        evolution_details: evolutionsDetailsFilter(chain.evolves_to[index].evolution_details),
      });

      if (chain.evolves_to[index].evolves_to.length > 0) {
        const lastChain = chainFilter(chain.evolves_to[index].evolves_to[0], count + 1);
        if (lastChain) {
          evolutions.push(...lastChain);
        }
      }
    });
  }
  return evolutions;
};
