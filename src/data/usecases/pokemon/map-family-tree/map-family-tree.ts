import { IMapFamilyTree } from '@src/domain/usecases/map-family-tree';
import { failure, success } from '@src/domain/shared/utils/either';
import { Chain, IFamilyTreeRequester } from '@src/data/contracts/apis';
import { FamilyTreeModel } from '@src/domain/models/pokemon';

export class MapFamilyTree implements IMapFamilyTree {
  constructor (private readonly api: IFamilyTreeRequester) {}

  async execute ({ id }: IMapFamilyTree.Params): IMapFamilyTree.Result {
    try {
      const data = await this.api.familyTree(id);

      return success(this.chainFilter(data.chain));
    } catch (err) {
      return failure(err);
    }
  }

  private evolutionsDetailsFilter = (arr: Array<any>): any => {
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

  private chainFilter = (chain: Chain, count: number = 1): FamilyTreeModel[] => {
    let evolutions: FamilyTreeModel[] = [];

    evolutions.push({
      evolution_lvl: count,
      name: chain.species.name,
      evolution_details: this.evolutionsDetailsFilter(chain.evolution_details),
    });

    if (chain.evolves_to.length > 0) {
      chain.evolves_to.forEach((evolution, index) => {
        count += 1;

        evolutions.push({
          evolution_lvl: count,
          name: evolution.species.name,
          evolution_details: this.evolutionsDetailsFilter(chain.evolves_to[index].evolution_details),
        });

        if (chain.evolves_to[index].evolves_to.length > 0) {
          const lastChain = this.chainFilter(chain.evolves_to[index].evolves_to[0], count + 1);
          if (lastChain) {
            evolutions.push(...lastChain);
          }
        }
      });
    }
    return evolutions;
  };
}
