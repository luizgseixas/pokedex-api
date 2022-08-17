import { IChain } from '@src/domain/adapters/responses';
import { FamilyTreeModel } from '@src/domain/models/family-tree';

export const evolutionsDetailsFilter = (arr: Array<any>) => {
  const evolutions = arr.map((datail) => Object.keys(datail).reduce((newObj, key) => {
    const value = datail[key];
    if (value !== null && value !== false && key !== 'trigger' && value !== '') {
      newObj[key] = value;
    }
    return newObj;
  }, {}))[0];

  return evolutions;
};

let evolutions = {};

export const chainFilter = (chain: IChain) => {
  let count = 1;

  evolutions[`evolution_${count}`] = { name: chain.species.name };

  console.log(chain);

  chain.evolves_to.forEach((evolution, index) => {
    count += 1;
    const details = evolutionsDetailsFilter(chain.evolves_to[index].evolution_details);
    evolutions[`evolution_${count}`] = { name: evolution.species.name, evolution_details: details };

    if (chain.evolves_to[index].evolves_to.length > 0) {
      const lastChain = chainFilter(chain.evolves_to[index].evolves_to[0]);
      if (lastChain) {
        evolutions[`evolution_${count}`] = lastChain;
      }
    }
  });

  // const evolves = chain.evolves_to.reduce((newObj, current, key) => {
  //   if (chain.evolves_to.length > 0) {
  //     count += 1;

  //     const details = evolutionsDetailsFilter(chain.evolves_to[key].evolution_details);
  //     const lastChain = chainFilter(chain.evolves_to[key]);
  //     newObj[`evolution_${count}`] = { name: current.species.name, evolution_details: details };
  //     if (lastChain) {
  //       newObj[`evolution_${count}`] = lastChain;
  //     }
  //   }
  //   return newObj;
  // }, {});

  return evolutions;
};
